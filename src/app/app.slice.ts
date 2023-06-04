import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError, isAxiosError} from "axios";


const appInitialState = {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
    users: []
};

type InitialStateType = typeof appInitialState

const slice = createSlice({
    name: "app",
    initialState: {
        error: null as string | null,
        isLoading: true,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading;
        },
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.isLoading = false;
                    if (!action.payload.showGlobalError) return;
                    const err = action.payload.e as Error | AxiosError<{ error: string }>;
                    if (isAxiosError(err)) {
                        state.error = err.response ? err.response.data.error : err.message;
                    } else {
                        state.error = `Native error ${err.message}`;
                    }
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state) => {
                    state.isLoading = false;
                }
            ).addDefaultCase((state, action) => {
            console.log("addDefaultCase 🚀", action.type);
        });
    },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions
