import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'http://localhost:1996/api/v1',
});

export const registerAPI = async ({data}) => {
  const response = axios
    .post('http://localhost:1996/api/v1/auth/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.data;
    });
 return response
};
export const LoginAPI = async ({data}) => {
  const response = axios.post('http://localhost:1996/api/v1/auth/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response)
      return response.data;
    });
 return response
};
export const AddJobAPI = async ({data}) => {
  console.log(data,"test")
  const response = axios.post('http://localhost:1996/api/v1/jobs', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response)
      return response.data;
    });
 return response
};
