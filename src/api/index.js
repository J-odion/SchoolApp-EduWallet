import axios from "axios";
import { BASE_URL } from "@env";
import {
  getClientId,
  signSecretMessage,
  getAppVersion,
  getVariantName,
} from "../security";
import store from "../redux/store";
import {
  app_already_loogedIn,
  app_update_modal,
  expired_token,
  update_user_profile,
} from "../redux/reducer/userSlice";

export const apiPostCall = async (path, payload, headers) => {
  try {
    const response = await axios.post(`${BASE_URL}${path}`, payload, {
      headers,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const response = error.response.data;
      response.status = error.response.status;
      return response;
    }

    // TODO: return error response
    return { success: false, message: error.message };
  }
};

export const apiGetCall = async (path, headers) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const response = error.response.data;
      response.status = error.response.status;

      return response;
    }

    // TODO: return error response
    return { success: false, message: error.message };
  }
};
export const apiPutCall = async (path, payload, headers) => {
  try {
    const response = await axios.put(`${BASE_URL}${path}`, payload, {
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const response = error.response.data;
      response.status = error.response.status;
      return response;
    }

    // TODO: return error response
    return { success: false, message: error.message };
  }
};

//Endpoint calls

//TODO: Refactor to follow intermediate function all that handle api and dispatch
export const signUserIn = async (payload) => {
  // get clientId
  const clientID = await getClientId();
  // add clientid to header
  const header = {
    "x-client-id": clientID,
  };
  //
  const response = await apiPostCall("/auth/login", payload, header);

  if (response.success) {
    store.dispatch(
      update_user_profile({ ...response.data, email: payload.email })
    );
  }
  return response;
};

export const speciaLogOut = async (userId, deviceInfo = {}) => {
  // get clientId
  const clientID = await getClientId();

  const payload = { device: JSON.stringify(deviceInfo) };

  // add clientid to header
  const header = {
    "x-client-id": clientID,
  };
  const response = await apiPostCall(`/auth/logout/${userId}`, payload, header);
  return response;
};

export const signUpUser = async (payload) => {
  const response = await apiPostCall("/auth/register", payload);
  return response;
};

//TODO: Refactor to follow intermediate function all that handle api and dispatch
export const verifyEmailToken = async (payload) => {
  // get clientId
  const clientID = await getClientId();

  // add clientid to header
  const header = {
    "x-client-id": clientID,
  };
  //
  const response = await apiPostCall(
    "/auth/verify-email-token",
    payload,
    header
  );

  if (response.success) {
    store.dispatch(
      update_user_profile({ ...response.data, email: payload.email })
    );
  }

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await verifyEmailToken(payload);
    });
  }

  return response;
};

const getCommonHeaders = async () => {
  // get secret message
  const { authCode, userDeviceInfo, email } = store.getState().user;
  const version = getAppVersion();
  const variantName = getVariantName();

  const message = {
    device: JSON.stringify(userDeviceInfo),
    email,
    version,
    variantName,
  };
  const secret = await signSecretMessage(message);

  const headerObj = {
    "x-client-secret": secret,
  };

  if (authCode) {
    Object.assign(headerObj, {
      "x-auth-code": authCode,
    });
  }
  return headerObj;
};

const getHeadersWithAccessToken = async () => {
  const headers = await getCommonHeaders();
  const { accessToken } = store.getState().user;
  headers.Authorization = `Bearer ${accessToken}`;

  return headers;
};

export const getAccessToken = async () => {
  const headers = await getCommonHeaders();
  const response = await apiGetCall("/get-access-token", headers);

  if (response.success) {
    store.dispatch(update_user_profile(response.data));
  }
  return response;
};

const updateAccessTokenAndRetryAction = async (actionCallBack) => {
  const retryAccessTokenRes = await getAccessToken();

  if (retryAccessTokenRes.success) {
    const retryProfileResponse = await actionCallBack();
    return retryProfileResponse;
  }
  const { errorCode } = retryAccessTokenRes;
  if (errorCode) {
    if (errorCode === "50") {
      store.dispatch(expired_token());
    }
    if (errorCode === "11") {
      store.dispatch(app_update_modal(true));
    }
    if (errorCode === "01") {
      store.dispatch(app_already_loogedIn());
    }
  }

  return retryAccessTokenRes;
};

//TODO: Refactor to follow intermediate function all that handle api and dispatch
export const getUserProfile = async () => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall("/user/profile", headers);

  if (response.success) {
    store.dispatch(update_user_profile(response.data));
  }
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getUserProfile();
    });
  }
  console.log("profile", response);
  return response;
};

export const createWallet = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/wallets", data, headers);
  if (response.status === 422) {
    // retry the request
    return await updateAccessTokenAndRetryAction(async () => {
      return await createWallet(data);
    });
  }
  // console.log("create wallet", data, response);
  return response;
};
export const getUserWallets = async () => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall("/wallets/list", headers);
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getUserWallets();
    });
  }
  // console.log("all wallets", response);
  return response;
};
export const getWalletTransactionsHistory = async (
  currency = "ALL",
  offsetTime = new Date().toISOString()
) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall(
    `/wallets/transaction-history?currency=${currency}&offsetTime=${offsetTime}&size=15`,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getWalletTransactionsHistory(currency, offsetTime);
    });
  }
  return response;
};

export const getAllWalletTransactionsHistory = async (
  currency = "ALL",
  page = 1
) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall(
    `/wallets/transaction-history?currency=${currency}&page=${page}`,

    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getAllWalletTransactionsHistory(currency, page);
    });
  }

  return response;
};

export const getAllTransactionsHistory = async (currency, transactionType) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall(
    `/transaction/details?transactionType=${transactionType}&currency=${currency}`,

    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getAllTransactionsHistory(currency, transactionType);
    });
  }

  return response;
};

export const getTransactionsDetails = async (refrence) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall(
    `/wallets/transaction-status/${refrence}`,

    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getTransactionsDetails(refrence);
    });
  }

  return response;
};

export const getBeneficiaries = async (currency) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall(
    "/wallets/beneficiaries",
    {
      currency,
    },
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getBeneficiaries(currency);
    });
  }
  // console.log("beneficiaries", response.data.length);
  return response;
};

export const updateProfilePicture = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/user/update-profile", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await updateProfilePicture(data);
    });
  }

  return response;
};

export const changePassword = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/user/change-password", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await changePassword(data);
    });
  }

  return response;
};

export const forgotPassword = async (data) => {
  const response = await apiPostCall("/auth/forgot-password", data);
  console.log("yo", response);
  return response;
};

export const verifyPasswordResetToken = async (data) => {
  const response = await apiPostCall("/auth/verify-password-reset-token", data);

  return response;
};

export const handleSetNewPassword = async (data) => {
  const response = await apiPostCall("/auth/update-password", data);

  return response;
};

export const handleResolution = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall(
    "/wallets/resolve-transaction-information",
    data,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleResolution(data);
    });
  }

  return response;
};

export const transfer = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/wallets/transfer", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await transfer(data);
    });
  }

  return response;
};

export const createTransactionPin = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall(
    "/user/create-transaction-pin",
    data,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await createTransactionPin(data);
    });
  }

  return response;
};

export const confirmPin = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall(
    "/user/confirm-transaction-pin",
    data,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await confirmPin(data);
    });
  }

  return response;
};

export const changeTransactionPin = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall(
    "/user/update-transaction-pin",
    data,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await changeTransactionPin(data);
    });
  }

  return response;
};

export const resendToken = async (data) => {
  const response = await apiPostCall("/auth/resend-verification-token", data);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await resendToken(data);
    });
  }

  return response;
};

export const resendBvnToken = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/kyc/resend-bvn-token", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await resendBvnToken(data);
    });
  }

  return response;
};

export const nairaPayout = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/wallets/naira-payout", data, headers);
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await nairaPayout(data);
    });
  }
  return response;
};

export const getBankList = async () => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiGetCall("/local-banks", headers);
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getBankList();
    });
  }
  return response;
};

export const foreignPayout = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/wallets/foreign-payout", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await foreignPayout(data);
    });
  }

  return response;
};

export const logoutCall = async () => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiGetCall("/auth/logout", headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await logoutCall();
    });
  }

  return response;
};

export const handleBvnVerification = async (data) => {
  const headers = await getHeadersWithAccessToken();

  const response = await apiPostCall("/kyc/bvn-verification", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleBvnVerification(data);
    });
  }

  return response;
};
export const fetchSmileCallback = async () => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall("/kyc/fetch-smile-callback-url", headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await fetchSmileCallback();
    });
  }

  return response;
};

export const handleBvnTokenVerification = async (data) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall("/kyc/verify-bvn-token", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleBvnTokenVerification(data);
    });
  }

  return response;
};

export const handleNewIDVerificationProcess = async (data) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPutCall(
    "/kyc/user-kyc-verification",
    data,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleNewIDVerificationProcess(data);
    });
  }

  return response;
};

// THIS IS THE NEW KYC ENDPOINT FOR ID VERIFICATION
export const handleKYCIDVerificationProcess = async (service, payload) => {
  const headers = await getHeadersWithAccessToken();
  //payload should include {data, provider}
  const response = await apiPostCall(`/kyc/${service}`, payload, headers);
  // console.log("kyc response", response);
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleKYCIDVerificationProcess(service, payload);
    });
  }

  return response;
};

export const handleBiometricVerification = async (data) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall(
    "/kyc/face-id-verification",
    data,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleBiometricVerification(data);
    });
  }

  return response;
};

export const handleSwap = async (data) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall("/wallets/swap-feature", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await handleSwap(data);
    });
  }

  return response;
};

export const getRates = async (data) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall("/wallets/fetch-rate", data, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getRates(data);
    });
  }

  return response;
};

//GET SWAP HISTORY
export const getSwapHistory = async (data = 1) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall(
    `/wallets/swap-history?page=${data}`,
    headers
  );
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getSwapHistory(data);
    });
  }

  return response;
};

export const getAllSecurityQuestions = async () => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiGetCall(`/auth/fetch-security-questions`, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await getAllSecurityQuestions();
    });
  }

  return response;
};

export const manageSecurityQuestions = async (el) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall(
    `/auth/manage-security-questions`,
    el,
    headers
  );

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await manageSecurityQuestions(el);
    });
  }

  return response;
};

export const getUserSecurityQuestion = async (el) => {
  const response = await apiGetCall(
    `/auth/fetch-security-questions?email=${el}`
  );

  return response;
};

export const sendDeviceVerificationToken = async (payload) => {
  const response = await apiPostCall(
    `/auth/send-device-verification-token`,
    payload
  );
  console.log("resend", response);
  return response;
};

export const resetDevice = async (payload) => {
  const response = await apiPostCall(`/auth/reset-device-id`, payload);

  return response;
};

export const setup2FactorCodes = async (payload) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPutCall(`/auth/setup-2fa-code`, payload, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await setup2FactorCodes();
    });
  }
  return response;
};

export const verify2Factor = async (payload) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall(`/auth/verify-2fa-otp`, payload, headers);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await verify2Factor(payload);
    });
  }
  return response;
};

export const resend2FactorCode = async (payload) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall(
    `/auth/resend-2fa-email-token`,
    payload,
    headers
  );
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await resend2FactorCode(payload);
    });
  }
  return response;
};

export const uploadDocument = async (payload, reference) => {
  const headers = await getHeadersWithAccessToken();
  const response = await apiPostCall(
    `/wallets/transaction-document/${reference}`,
    payload,
    headers
  );
  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await uploadDocument(payload);
    });
  }
  console.log(
    "upload receipt",
    `/wallets/transaction-document/${reference}`,
    payload
  );
  return response;
};
