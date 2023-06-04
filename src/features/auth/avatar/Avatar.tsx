import React, {useCallback} from 'react';
import s from "features/auth/avatar/styles.module.css";
import Button from "@mui/material/Button";
import {Avatar} from "@mui/material";
import {useAppSelector} from 'app/hooks'
import InputText from "common/utils/inputText";
import {EditableSpan} from 'common/utils/editSpan'
const AvatarUser = () => {
    const profile = useAppSelector((state)=> state.auth.profile)
    const changeNametitle = (title:string)=> {
        
    }
    return (
        <div className={s.container}>
            <div className={s.form_wrapper}>
                <div className={s.form_position}>
                    <div className={s.form_label}>PERSONAL INFORMATION</div>
                    <div className={s.form_icons}>
                        <Avatar  sx={{width: 108, height:108}} />
                        {profile ? <div>{profile.name} </div>:<div> </div>  }
                    </div>
                    <div className={s.form_info}>
                     <EditableSpan  value={ {profile ? {profile.name} : 'name'} } onChange={changeNametitle} />
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

export default AvatarUser;
