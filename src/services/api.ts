import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // ou sem o NEXT_PUBLIC_ se só for server-side
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// function getToken() {
//   if (localStorage.getItem('@Auth:TOKEN')) {
//     const token = localStorage.getItem('@Auth:TOKEN') as string;
//     return token;
//   }
// }

// instance.interceptors.request.use(async config => {
//   const token = getToken();
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

const apis = {
  index: (endpoint: string) => instance.get(endpoint),
  store: (endpoint: string, data: any) => instance.post(endpoint, data),
  show: (endpoint: string, id: string) => instance.get(`/${endpoint}/${id}`),
  update: (endpoint: string, id: string, data: object) =>
    instance.put(`/${endpoint}/${id}`, data),
  delete: (endpoint: string, id: string) =>
    instance.delete(`/${endpoint}/${id}`),
  login: (endpoint: string, data: any) => instance.post(endpoint, data),
};

export default apis;
