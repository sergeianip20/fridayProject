import React, {useEffect} from 'react';
import s from './styles.module.css'
import {Button} from "@mui/material";
import IT from 'imge/it.png'
import {useAppDispatch, useAppSelector} from "app";
import {authThunks} from "features/auth/auth.slice";
import {NavLink} from 'react-router-dom';
export const Header = () => {
    const profile = useAppSelector((state) => state.auth.profile);
    console.log(profile)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authThunks.me(''))

    }, [])

    return (
        <header className={s.wrapper}>
            <div className={s.header_wrapper}>
                <div className={s.it}><img src={IT}/></div>
                <div className={s.header_button}></div>
                <NavLink to='/login'>    <div className={s.header_span}>Sign in</div></NavLink>

            </div>
        </header>
    );
};

