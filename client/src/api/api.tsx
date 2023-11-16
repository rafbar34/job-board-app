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
      params: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ0Mjc0NDRlZGUyODBjMTFlMDNkNzciLCJyb2xlIjoidXNlciIsImlhdCI6MTcwMDA1NzUyOSwiZXhwIjoxNzAwMTQzOTI5fQ.A5uUL_Wu34U_pgpsmhBkqReWhXuliSJNaI2ynvzf-cU",
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
      params: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ0Mjc0NDRlZGUyODBjMTFlMDNkNzciLCJyb2xlIjoidXNlciIsImlhdCI6MTcwMDA1NzUyOSwiZXhwIjoxNzAwMTQzOTI5fQ.A5uUL_Wu34U_pgpsmhBkqReWhXuliSJNaI2ynvzf-cU",
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
export const GetStatsAPI = async () => {
  const response = axios
    .get("http://localhost:1996/api/v1/users/stats/app-stats/", {
      params: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ0Mjc0NDRlZGUyODBjMTFlMDNkNzciLCJyb2xlIjoidXNlciIsImlhdCI6MTcwMDA1NzUyOSwiZXhwIjoxNzAwMTQzOTI5fQ.A5uUL_Wu34U_pgpsmhBkqReWhXuliSJNaI2ynvzf-cU",
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
