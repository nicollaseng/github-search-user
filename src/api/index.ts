import axios from "axios";

// Access
const url = `https://api.github.com`;

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  timeout: 35000
});

api.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    console.log("Error Request: ", error.response);
    if (error.response.status === 408) {
      console.log("Timeout");
    }
  }
);

// Interceptor Response
const interceptor = api.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  async error => {
    if (error.response.status === 408) {
      console.log("Timeout ");
      return api.request(error.response.config);
    }

    if (error.response.status === 403) {
      if (
        error.response.data.mensagem !== "O código de segurança não confere." &&
        error.response.data.mensagem !== "Usuário bloqueado."
      ) {
        api.interceptors.response.eject(interceptor);
      }
    }

    return Promise.reject(error);
  }
);

export { url, api as default };
