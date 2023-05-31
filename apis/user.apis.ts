import { LoginParams, SignupParams } from "@/types/user.interface";
import api from "./base";

export const loginApis = (params: LoginParams) =>
  api.post("/auth/login", params);

export const signupApis = (params: SignupParams) =>
  api.post("/auth/signup", params);

export const fetchCurrentUser = () => api.get("/user/mes");
