import React, {FC} from 'react';
import {FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useForm, SubmitHandler, Path, UseFormRegister} from "react-hook-form";

interface IFormValues {
    email: string;
    password: string;
}

type InputTextType = {
    password: boolean
    label: string
    register: any
    inputWidth: string
    errors: any
}
type Inputs = {
    example: string,
    exampleRequired: string,
};
type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
};
const InputText:FC<InputTextType> = React.memo(({errors, label, register, password,inputWidth }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    console.log(watch('name'))
    return (
        <div>

            {props.password ?

                <FormControl sx={{width: inputWidth}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
                    <Input
                        fullWidth={true}

                        {...register(props.label)}

                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl> :
                <FormControl sx={{width: '100%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
                    <Input error={!!errors[name]}
                        {...register(props.label)} sx={{width: inputWidth}} type={'text'}/>
                </FormControl>
            }
        </div>
    );
})

export default InputText;
