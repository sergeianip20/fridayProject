import {useAppDispatch} from "app/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from "features/auth/Login/styles.module.css";
import React, {useState} from "react";
import InputText from "common/utils/inputText";
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";
import {Button} from "@mui/material";

interface IFormValues {
    email: string;
    password: string;
}

export const Register = () => {

    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<IFormValues>();
    const registerHandler = () => {
        const payload = {
            email: "safrondev2@gmail.com",
            password: "12345678"
        };
        dispatch(authThunks.register(payload));
    };

    return (
        <div className={s.container}>
            <div className={s.login_wrapper}>
                <div className={s.login_label}> Sign up</div>
                <div className={s.login_name}>
                    <InputText
                        inputWidth={'98%'}
                        label={'email'}
                        password={false}
                        register={register}/>
                </div>
                <div className={s.login_password}>
                    <InputText
                        label={'password'}
                        password={true}
                        inputWidth={'98%'}
                        register={register}/>
                </div>
                <div className={s.login_Confirmpassword}>
                    <InputText
                        label={'Confirm password'}
                        password={true}
                        inputWidth={'98%'}
                        register={register}/></div>
                <div className={s.login_button}><Button onClick={registerHandler} type='submit' sx={{width: '98%', borderRadius: 30}}
                                                        variant="contained"> Sign
                    up</Button></div>
                <div className={s.login_account}> Don't have an account?</div>
                <div className={s.login_end}> Sign in</div>

            </div>
        </div>
    );
};
