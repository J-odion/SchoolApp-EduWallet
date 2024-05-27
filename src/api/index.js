import axios from "axios";
import { BASE_URL } from "@env";
import store from "../redux/store";
import {
  update_user_profile,
} from "../redux/reducer/userSlice";

export const apiPostCall = async (path, payload, ) => {
  try {
    const response = await axios.post(`${BASE_URL}${path}`, payload);

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
export const apiGetCall = async (path) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`);

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

export const apiPatchCall = async (path, payload) => {
  try {
    const response = await axios.patch(`${BASE_URL}${path}`, payload);
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
/*
Post calls
*/
export const UserSignUp = async (payload) => {
  const response = await apiPostCall("/parent/", payload); 
  // const response = await apiPostCall("/parent/", payload);
  console.log("signup user", response)
  return response;
};

export const userSignIn = async (payload) => {
  const response = await apiPostCall("/parent/login", payload);
  if (response.success) {
    store.dispatch(
      update_user_profile({ ...response.data, email: payload.email })
    );
  }
  return response;
};

export const updateProfile = async (data) => {
  const response = await apiPostCall("/parent/update", data);
  if (response.success) {
    return await updateAccessTokenAndRetryAction(async () => {
      return await updateProfilePicture(data);
    });
  }
  return response;
};
/*
Get calls
*/
export const getUserProfile = async () => {
  const response = await apiGetCall(
    "/parent/profile"
  );

  console.log("get profile response", response)

  return response;
};

export const GetChildren = async () => {
  const response = await apiGetCall("/parent/children", data);

  console.log("get profile response", response)
  return response;
};

export const getChildProfile = async (id) => {
  const response = await apiGetCall(`/parent/child/${id}`);

  console.log("get profile response", response)
  return response;
};

export const getEmailVerify = async (el) => {
  const response = await apiGetCall(`/parent/verify/${el}`);

  console.log("get profile response", response)
  return response;
};


/*
Patch calls
*/

export const updateUserProfile = async (payload) => {
  const response = await apiPatchCall(`/parent/update`, payload);

  if (response.success) {
      return await updateUserProfile();
  }

  console.log("updated profile")
  return response;
};

export const updateUserPassword = async (payload) => {
  const response = await apiPatchCall(`parent/password`, payload);

  if (response.success) {
      return await updateUserPassword();
  }

  console.log("updated Password")
  return response;
};