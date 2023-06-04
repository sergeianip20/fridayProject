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
        <div className={s.container}>
            <div className={s.form_wrapper}>
                <div className={s.form_position}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.form_label}>Create new Password</div>
                    <div className={s.form_input}>
                        <InputText password={true} label={'password'} register={register} inputWidth={'98%'} />

                    </div>
                    <div className={s.form_info}>
                        {" "}
                        Create new password and we will send you further instructions to email{" "}
                    </div>
                    <div className={s.form_button}>
                        <Button sx={{width: "100%", borderRadius: 5}} variant="contained">
                           Create new Password
                        </Button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};