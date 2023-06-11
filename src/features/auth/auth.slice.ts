import { createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType } from "features/auth/auth.api";
//import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
// {thunkTryCatch} from "common/utils/thunk-try-catch";
import {appActions} from "app/app.slice";
import {createAppAsyncThunk, thunkTryCatch } from 'common/utils'
type ParamsTypePut = {
  name?: string;
  avatar?: string;
};
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null
  },
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;

      }).addCase(me.fulfilled, (state, action)=> {
          state.profile = action.payload.profile

    })
  }
});

const me = createAppAsyncThunk<{ profile: ProfileType }, ''>
("auth/me", async (arg:any, thunkAPI) => {
  const res = await authApi.authMe();
  return { profile: res.data };
});
const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>("auth/login", async (arg, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res = await authApi.login(arg);
            return { profile: res.data };
        },
        true
    );
});
const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg: ArgRegisterType, thunkAPI:any) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await authApi.register(arg);
    console.log("register", res);
  });
});
const mePutUser = createAppAsyncThunk<{profile:ProfileType},ParamsTypePut>('auth/updated', async (arg:ParamsTypePut, thunkAPI:any) => {
return thunkTryCatch(thunkAPI, async () => {
const res = await authApi.authPut(arg)
return {profile: res.data}
})
}) 
const forgotPassword = createAppAsyncThunk<{redirectPath:RedirectPathType; checkEmailMessage:string} & InfoMessageType, SetNewPassBodyType>("auth/register", async (data: ForgotPassBodyType, thunkAPI:any) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await authApi.forgotPassword(data);
    return { redirectPath: '/auth/check-email',
           checkEmailMessage: data.email,
            info: res.data.info
           }
  });
});
const setNewPassword = createAppAsyncThunk<{info:string,redirectPath:RedirectPathType },ParamsTypePut>('auth/updated', async (arg:ParamsTypePut, thunkAPI:any) => {
return thunkTryCatch(thunkAPI, async () => {
const res = await authApi.authPut(arg)
return {profile: res.data}
})
})


export const authReducer = slice.reducer;
export const authThunks = { register, login, me };

