import axios from "axios";
import { isArray } from "lodash";

import { BASE_URL } from "@/configs/baseUrl";
import { ACCESS_TOKEN } from "@/constants";
import { getLocalStorage } from "@/utils/localStorage";

const api = axios.create({
  url: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getLocalStorage(ACCESS_TOKEN);
  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },

  async (error) => {
    if (error.response) {
      const errors = error.response.data;
      return Promise.reject(
        errors.data && isArray(errors.data)
          ? errors.data[0]?.messages
          : [
              {
                id: "common",
                message:
                  errors.statusCode === 500 ? "Lỗi server" : errors.message,
              },
            ]
      );
    } else if (error.request)
      return Promise.reject([{ id: "common", message: "Lỗi server" }]);
    return Promise.reject([{ id: "common", message: error.message }]);
  }
);

export default api;
