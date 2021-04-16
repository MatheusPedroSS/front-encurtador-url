import { Box, Container } from '@material-ui/core';
import Form from '../components/Form';
import {login, getHeaders} from '../api/Api'

const Login = () => {
    const efetuarLogin = async (user) => {
        console.log(JSON.stringify(user))
        await login(user);
        console.log(getHeaders())
    }
    return(
        <Container component="main" maxWidth="xs">
            <div>
                <Form title={"Login"} onClicked={efetuarLogin}/>
            </div>
        </Container>
    )
}

export default Login;