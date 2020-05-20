import React, { useState } from 'react';
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

import { makeStyles } from '@material-ui/core/styles';
import './LoginScreen.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  }
}));

  
const LoginScreen = props => {

    const classes = useStyles();

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signUp = () => {
        console.log('go to sign up');
    };

    return (
        <div className="login-screen-container">
            <Card className="card">
                <CardContent>
                    <Typography variant="h6">
                        Iniciar Sesión
                    </Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField className="input-text" id="outlined-basic" label="Correo" variant="outlined" />
                        <FormControl className="input-text" variant="outlined">
                            <InputLabel className="label" htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </form>
                    <Typography style={{color: 'rgba(0, 0, 0, 0.54)'}} variant="subtitle2">
                        Olvidé mi contraseña
                    </Typography>
                    <div className="buttons-container">
                        <Button variant="contained" color="primary">
                            Entrar
                        </Button>
                        <Button
                            style={{marginTop: '8px'}}
                            color="secondary"
                            onClick={signUp}>Crear una cuenta</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default LoginScreen;


