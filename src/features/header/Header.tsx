import React from 'react';
import s from './styles.module.css'
import {Button} from "@mui/material";
import IT from 'imge/it.png'
export const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.header_wrapper}>
                <div className={s.it}><img src={IT}/></div>
                <div className={s.header_button}></div>
                <div className={s.header_span}>Sign in</div>

            </div>
        </header>
    );
};

