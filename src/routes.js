import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Login';
import SignUp from './pages/SignUp';

import { isAuthenticated } from './services/auth'

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => {
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: {from: props.location } }} />
            )
        }}
    
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <PrivateRoute path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;