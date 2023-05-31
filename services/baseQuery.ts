import { BASE_URL } from "@/configs/baseUrl";
import { ACCESS_TOKEN } from "@/constants";
import { getLocalStorage } from "@/utils/localStorage";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  //prepareHeaders: use set header such as api.interceptor.request.use
  prepareHeaders: (headers: Headers) => {
    const token = getLocalStorage(ACCESS_TOKEN);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
