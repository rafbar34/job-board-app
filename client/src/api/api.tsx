import axios from "axios";
import { useCookies } from "react-cookie";

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
export const EditProfileAPI = async ({ data }) => {
  const response = axios
    .patch("http://localhost:1996/api/v1/users/update-user", data, {
      withCredentials: true,
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

export const AddJobAPI = async ({ data, token }) => {
  const response = axios
    .post("http://localhost:1996/api/v1/jobs", data, {
      params: {
        token: token,
      },
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
export const EditJobAPI = async ({ data, token }) => {
  const response = axios
    .patch("http://localhost:1996/api/v1/jobs", data, {
      params: {
        token: token,
      },
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
    .get("http://localhost:1996/api/v1/jobs", {
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
export const GetAllCreatedJobs = async ({ token }) => {
  const response = axios
    .get("http://localhost:1996/api/v1/jobs/my-jobs", {
      params: { token: token },
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
export const GetSingleJob = async ({ id }) => {
  const response = axios
    .get(`http://localhost:1996/api/v1/jobs/${id}`, {
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
export const GetStatsAPI = async ({ token }) => {
  const response = axios
    .get("http://localhost:1996/api/v1/users/stats/app-stats/", {
      params: {
        token: token,
      },
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
