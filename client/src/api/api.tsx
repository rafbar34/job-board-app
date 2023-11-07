import axios from "axios";

export const customFetch = axios.create({
  baseURL: "http://localhost:1996/api/v1",
});

export const registerAPI = async ({ data }) => {
  const response = axios
    .post("http://localhost:1996/api/v1/auth/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
};
export const LoginAPI = async ({ data }) => {
  const response = axios
    .post("http://localhost:1996/api/v1/auth/login", data, {
      withCredentials: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
};
export const logoutAPI = async () => {
  const response = axios
    .post("http://localhost:1996/api/v1/auth/logout", {
      withCredentials: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
};
export const AddJobAPI = async ({ data }) => {
  const response = axios
    .post("http://localhost:1996/api/v1/jobs", data, {
      withCredentials: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
};
export const GetAllJobAPI = async () => {
  const response = axios
    .get("http://localhost:1996/api/v1/jobs",{
      withCredentials: true,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
};
