import React from "react";
import s from "features/auth/CreatenewPassword/styles.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputText from "common/utils/inputText";
import {useAppDispatch} from "app";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {authThunks} from "features/auth/auth.slice";
import {toast} from "react-toastify";
import {yupResolver} from '@hookform/resolvers/yup'
import {object, string} from "yup";
type PasswordFormType ={
    password:string;
}
export const CreateNewPassword = () => {
    const validateShema = object({
        password: string().required().min(3).max(25)
    })
    const {register, watch, handleSubmit} = useForm<PasswordFormType>({
        resolver:yupResolver(validateShema)
    })
    const onSubmit: SubmitHandler<PasswordFormType> = data =>console.log(data)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    return (
        <div>

            <Form

                title={'Create new password'}

                btnName={'Create new password'}

                onClick={handleSubmit(onSubmit)}

            >

                <PasswordInput

                    label={'New password'}

                    name={'password'}

                    errors={errors}

                    register={register}

                />

                <InfoMessage

                    text={'Create new password and we will send you further instructions to email'}

                />

            </Form>

        </div>
    );
};
