export interface LoginParams {
  username: string;
  password: string;
}

export interface SignupParams extends LoginParams {
  fullName: string;
  nickName: string;
  phone: string;
  address: string;
}

export interface CurrentUser {
  fullName: string;
  username: string;
  nickName: string;
  createdAt: string;
  updatedAt: string;
  address: string;
}
