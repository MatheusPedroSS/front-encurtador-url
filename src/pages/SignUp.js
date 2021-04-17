import { Container } from '@material-ui/core';
import Form from '../components/Form';
import {signUp} from '../api/Api'
import { withRouter } from 'react-router';

const SignUp = (props) => {
    const cadastrarUsuario = async (user) => {
        console.log(JSON.stringify(user))
        await signUp(user);
        props.history.push("/home");
    }
    return(
        <Container component="main" maxWidth="xs">
            <div>
                <Form title={"Cadastro"} onClicked={cadastrarUsuario}/>
            </div>
        </Container>
    )
}

export default withRouter(SignUp);