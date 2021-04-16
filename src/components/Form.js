import { Box, Button, Input, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: 50
    },
    buttonSub: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
})

const Form = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const textChange = (prop) => (event) => {
        setUser({... user, [prop]: event.target.value });
    }

    const clicked = () => {
        props.onClicked(user);
    }

    return(
        <div className={classes.root}>
            <Typography component="h1" variant="h4">
                {props.title}
            </Typography>
            <form className={classes.form} noValidate>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={user.username}
                    onChange={textChange('username')}
                    autoFocus
                />
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={user.password}
                    onChange={textChange('password')}
                />
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.buttonSub}
                    onClick={clicked}
                >
                    Entrar
                </Button>
            </form> 
        </div>
    )
}

export default Form;