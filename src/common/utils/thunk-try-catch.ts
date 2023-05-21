import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AppDispatch, RootState} from "app/store";
import {AxiosError, isAxiosError} from "axios";
import {appActions} from "app/app.slice";


export const thunkTryCatch = async (
    thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>,
    logic: Function,
    showGlobalError: boolean = true
) => {
    const { rejectWithValue } = thunkAPI;
    try {
        return await logic();
    } catch (e) {
        return rejectWithValue({ e, showGlobalError });
    }
};
