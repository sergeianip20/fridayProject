import React from "react";
import s from "./styles.module.css";

import Button from "@mui/material/Button";
import {Avatar} from "@mui/material";

export const CheckEmail = () => {
    return (
        <div className={s.container}>
            <div className={s.form_wrapper}>
                <div className={s.form_position}>
                    <div className={s.form_label}>Check Email</div>
                    <div className={s.form_icons}>
                       <Avatar  sx={{width: 108, height:108}} />

                    </div>
                    <div className={s.form_info}>

                        We’ve sent an Email with inctructions to example@mail.com{" "}
                    </div>
                    <div className={s.form_button}>
                        <Button sx={{width: "100%", borderRadius: 5}} variant="contained">
                            Back to Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
