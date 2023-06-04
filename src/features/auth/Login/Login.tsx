import React, {useState} from 'react'

import {useAppDispatch} from "app";
import {authThunks} from "features/auth/auth.slice";
import s from "features/auth/Login/styles.module.css";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";
import {object, string,} from 'yup';
import {Button, Checkbox,} from "@mui/material";
import {yupResolver} from '@hookform/resolvers/yup'
import InputText from "common/utils/inputText";

interface IFormValues {
    email: string;
    password: string;
    rememberMe: boolean
}

export const Login = () => {
    const validateShema = object({
        email: string().required().email(),
        password: string().required().min(3).max(25)
    })
    const {register, watch, handleSubmit} = useForm<IFormValues>({
        defaultValues: {rememberMe: true},
        resolver: yupResolver(validateShema)
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    const onSubmit: SubmitHandler<IFormValues> = data => dispatch(authThunks.login(data))
        .unwrap()
        .then((res) => {
            toast.success("Вы успешно залогинились");
            navigate("/packs");
            console.log(data)
        })
        .catch((err) => {
            toast.error(err.e.response.data.error);
        });
    return (
        <div className={s.container}>

            <div className={s.login_wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.login_label}> Sign in</div>

                    <div className={s.login_name}>
                        <InputText inputWidth={'98%'}
                                   label={'email'}
                                   password={false}
                                   register={register}/>

                    </div>
                    <div className={s.login_password}>
                        <InputText label={'password'}
                                   password={true}
                                   inputWidth={'98%'}
                                   register={register}/></div>
                    <div className={s.login_checbox}><Checkbox/> Remember me</div>
                    <div className={s.login_forgot}> Forgot password?</div>
                    <div className={s.login_button}><Button type='submit' sx={{width: '98%', borderRadius: 30}}
                                                            variant="contained"> Sign
                        in</Button></div>

                    <div className={s.login_account}> Don't have an account?</div>
                    <div className={s.login_end}> Sign up</div>

                </form>
            </div>
        </div>
    );
};
