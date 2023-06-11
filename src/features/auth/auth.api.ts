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
  },
  forgotPassword: (data: ForgotPassBodyType) => {

        return axios.post<AuthResponseType>(

            'https://neko-back.herokuapp.com/2.0/auth/forgot',

            data,

            { withCredentials: true }

        )

    },

    setNewPassword: (data: SetNewPassBodyType) => {

        return axios.post<AuthResponseType>(

            'https://neko-back.herokuapp.com/2.0/auth/set-new-password',

            data,

            { withCredentials: true }

        )

    },


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
export type ForgotPassBodyType = {

    email: string

    from: string

    message: string

}
export type AuthResponseType = {

    info: string

    error?: string

}
export type SetNewPassBodyType = {

    password: string

    resetPasswordToken: string //token from url

}


