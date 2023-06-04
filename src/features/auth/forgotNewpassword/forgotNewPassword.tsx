import React from "react";
import s from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {object, string} from "yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch} from "app";
import {useNavigate} from "react-router-dom";
import InputText from "common/utils/inputText";

type PasswordFormType = {
    password: string;
}
export const ForgotNewPassword = () => {
    const validateShema = object({
        password: string().required().min(3).max(25)
    })
    const {register, watch, handleSubmit} = useForm<PasswordFormType>({
        resolver: yupResolver(validateShema)
    })
    const onSubmit: SubmitHandler<PasswordFormType> = data => console.log(data)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    return (
        <div className={s.container}>
        <div className={s.form_wrapper}>
            <div className={s.form_position}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.form_label}>Forgot new Password?</div>
                <div className={s.form_input}>
                    <InputText password={false} label={'email'} register={register} inputWidth={'98%'}/>

                </div>
                <div className={s.form_info}>
                    {" "}
                    enter your email address and we will send you further instructions{" "}
                </div>
                <div className={s.form_button}>
                    <Button sx={{width: "100%", borderRadius: 5}} variant="contained">
                        Send Inctructions
                    </Button>{" "}
                </div>
                <div className={s.form_did}> Did you remember your</div>
                <div className={s.form_end}> Try logging in</div>
                </form>
            </div>
        </div>
        </div>
    );
};