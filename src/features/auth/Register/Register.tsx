import {useAppDispatch} from "app/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from "features/auth/Login/styles.module.css";
import React, {useState} from "react";
import InputText from "common/utils/inputText";
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";
import {Button} from "@mui/material";
import {toast} from "react-toastify";
import {object, string} from "yup";
import {useNavigate} from "react-router-dom";
import {paths} from 'common/constans/Router'
interface IFormValues {
    email: string;
    password: string;
}

export const Register = () => {
    const validateShema = object({
        email: string().required().email(),
        password: string().required().min(3).max(25)
    })
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<IFormValues>();
    const registerHandler = () => {
        const payload = {
            email: "safrondev2@gmail.com",
            password: "12345678"
        };
        dispatch(authThunks.register(payload));
    };
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IFormValues> = data => dispatch(authThunks.register(data))
        .unwrap()
        .then((res) => {
            toast.success("Вы успешно авторизованы");
            navigate("/packs");
            console.log(data)
        })
        .catch((err) => {
            toast.error(err.e.response.data.error);
        });

    return (
        <Box>
            
                Sign up
                <Form 
                    
link={{ to: paths.LOGIN, text: 'Sign In' }}

                description={'Already have an account?'}

                title={'Sign Up'}

                btnName={'Sign Up'}

                onClick={() => {}}

                onSubmit={handleSubmit(onSubmit)}
                    >
                
                    <InputText
                        inputWidth={'98%'}
                        label={'email'}
                        password={false}
                        register={register}/>
                
               
                    <InputText
                        label={'password'}
                        password={true}
                        inputWidth={'98%'}
                        register={register}/>
                

                
                                                       
                    
                <div className={s.login_account}> Don't have an account?</div>
                <div className={s.login_end}> Sign in</div>
                </Form>
            
        </Box>
    );
};
