import React, {useState} from 'react'
import Box from '@mui/material/Box'
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
import FormControlLabel from '@mui/material/FormControlLabel'


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
    const {errors, register, watch, handleSubmit} = useForm<IFormValues>({
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
        <Box>

            
                <Form
link={{ to: paths.REGISTER, text: 'Sign Up' }}

                description={"Don't have an account?"}

                title={'Sign In'}

                btnName={'Sign In'}
 onSubmit={handleSubmit(onSubmit)}>
                    

                    
                        <InputText inputWidth={'98%'}
                                   label={'email'}
                                   password={false}
                                   register={register}
                            error={errors}
                            />

                    
                   
                        <InputText label={'password'}
                                Password={true}
                                   inputWidth={'98%'}
                                   register={register}/>
                    <FormControlLabel 
                        sx={{ alignSelf: 'self-start', marginTop: '20px' }}

                    control={<Checkbox {...register('rememberMe')} />}

                    label='Remember me'
                        
                        />
                    Forgot password?
                    
                                                 

                    <div className={s.login_account}> Don't have an account?</div>
                    <div className={s.login_end}> Sign up</div>

                </Form>
            
        </Box>
    );
};
