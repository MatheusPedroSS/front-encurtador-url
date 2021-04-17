import { Container } from '@material-ui/core';
import Form from '../components/Form';
import {signIn} from '../api/Api'
import { Redirect, withRouter } from 'react-router';

const Login = (props) => {
    const efetuarLogin = async (user) => {
        await signIn(user);
        props.history.push("/home");
    }
    return(
        <Container component="main" maxWidth="xs">
            <div>
                <Form title={"Login"} onClicked={efetuarLogin}/>
            </div>
        </Container>
    )
}

export default withRouter(Login);