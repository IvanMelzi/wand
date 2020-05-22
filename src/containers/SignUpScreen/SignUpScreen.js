import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import './SignUpScreen.scss';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: '16px'
    },
}));

const SignUpScreen = props => {

    const classes = useStyles();

    const [email, setEmail] = useState({
        value: '',
        errorStatus: false,
        messageError: ''
    });
    const [password, setPassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const [emailRepeatError, setEmailRepeatError] = useState({
        status: false,
        message: ''
    });
    const [disabledButton, setDisabledButton] = useState(false);

    let errorEmailMessage = (
        <Typography style={{color: 'red', display: 'flex', fontSize: '.7rem'}} variant="body2">
            El correo no es válido
        </Typography>
    );

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {
        // Revisar si las contraseñas coinciden.
        if (password.length > 0 && repeatPassword.length > 0 && password !== repeatPassword) {
            console.log('should disabled');
            setEmailRepeatError({
                status: true,
                message: (
                    <Typography style={{color: 'red', display: 'flex', fontSize: '.7rem'}} variant="body2">
                        Las contraseñas no coinciden
                    </Typography>
                )
            });
        } else {
            console.log('should no disabled');
            setEmailRepeatError({
                status: false,
                message: ''
            });
        }
        console.log(email.errorStatus);
        if (password.length === 0 || repeatPassword.length === 0 || email.value.length === 0 || email.errorStatus || (password !== repeatPassword)) {
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
    }, [password, repeatPassword, email, emailRepeatError.status]);


    const handleEmailChange = (event) => {
        setEmail({
            value: event.target.value,
            errorStatus: false,
            messageError: ''
        });
    };

    const handleBlurEmail = () => {
        if (email.value.length > 0 && !(regexEmail.test(String(email.value).toLowerCase()))) {
            setEmail({
                value: email.value,
                errorStatus: true,
                messageError: errorEmailMessage
            });
        } else {
            setEmail({
                value: email.value,
                errorStatus: false,
                messageError: ''
            });
        }
    };

    const handleChange = (prop) => (event) =>{
        if (prop === 'password') {
            setPassword(event.target.value);
        } else if (prop === 'repeatPassword') {
            setrepeatPassword(event.target.value);
        }
    };

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signUpHandler = () => {
        console.log('aa');
    };

    return (
        <div className="signup-screen-container">
            <Card className="card">
                <CardContent>
                    <Typography variant="h6">
                        Crea tu cuenta
                    </Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            error={email.errorStatus}
                            className="input-text"
                            id="outlined-basic"
                            label="Correo"
                            variant="outlined"
                            onChange={handleEmailChange}
                            onBlur={handleBlurEmail}
                            value={email.value}/>
                            {email.messageError}
                        <FormControl className="input-text" variant="outlined">
                            <InputLabel className="label" htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl className="input-text" variant="outlined">
                            <InputLabel
                                className="label"
                                style={{color: (emailRepeatError.status ? 'red': '')}}
                                htmlFor="outlined-adornment-password">
                                    Repetir contraseña
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-repeatPassword"
                                type={showPassword ? 'text' : 'password'}
                                value={repeatPassword}
                                onChange={handleChange('repeatPassword')}
                                labelWidth={70}
                                error={emailRepeatError.status}
                            />
                            {emailRepeatError.message}
                        </FormControl>
                        <TextField
                            variant="outlined"
                            id="date"
                            label="Fecha de nacimiento"
                            type="date"
                            defaultValue="1994-07-08"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <div className="buttons-container">
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={disabledButton}
                            onClick={signUpHandler}
                            >
                                Crear cuenta
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default SignUpScreen;


