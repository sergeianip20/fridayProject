import { instance } from "common/api/common.api";

export const authApi = {
  register: (arg: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", arg);
  },
  login: (arg: ArgLoginType) => {
    return instance.post<ProfileType>("auth/login", arg);
  },
  authMe:()=> {
    return instance.post<ProfileType>('auth/me')
},
authPut:(arg:mePutEdit)=> {
return instance.put("auth/me", { name: arg.name, avatar: arg.avatar });
  }


};

// Types
export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">

export type RegisterResponseType = {
  addedUser: Omit<ProfileType, "token" | "tokenDeathTime">
}

export type ProfileType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
}
export type mePutEdit = {
  name?: string;
  avatar?: string;
};
