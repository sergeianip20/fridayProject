import React, {useEffect} from 'react';
import s from './styles.module.css'
import {Button} from "@mui/material";
import logo from 'imge/logo.svg'
import AppBar from '@mui/material/AppBar'

import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'
import {useAppDispatch, useAppSelector} from "app";
import {authThunks} from "features/auth/auth.slice";
import { Link, useNavigate } from 'react-router-dom'
export const Header = () => {
    const profile = useAppSelector((state) => state.auth.profile);
    console.log(profile)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authThunks.me(''))

    }, [])

    return (
        <AppBar color={'inherit'} position={'static'}>

            <Container fixed>

                <Toolbar

                    disableGutters

                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}

                >

                    <Link to={paths.PACKS}>

                        <img style={{ height: '60px' }} src={logo} alt='app-logo' />

                    </Link>

                    {profile ? (

                        <HeaderProfile userName={profile.name} avatar={profile.avatar} />

                    ) : (

                        <SuperButton

                            callback={toLogin}

                            width={'113'}

                            rounded={true}

                            color={'primary'}

                            textColor={'white'}

                            name={'Sign In'}

                        />

                    )}

                </Toolbar>

            </Container>

        </AppBar>
    );
};

