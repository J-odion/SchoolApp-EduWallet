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




export const resendToken = async (data) => {
  const response = await apiPostCall("/auth/resend-verification-token", data);

  if (response.status === 422) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await resendToken(data);
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
