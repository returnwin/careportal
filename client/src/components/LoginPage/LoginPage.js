import React, {Component} from "react";
import PropTypes from 'prop-types';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import { Alert } from 'react-bootstrap';
import './LoginPage.css';

class LoginPage extends Component{
    renderError(){
        return(
            <Alert bsStyle="warning">
                <strong className="signupsigninerr">{this.props.err}</strong>
            </Alert>
        )
    }
    render(){
        return(
            <div className="loginPage">
                <SignIn onSignIn={this.props.onSignIn} err={this.renderError}/>
                <SignUp onSignUp={this.props.onSignUp} err={this.renderError}/>
                {this.props.err && this.renderError()}
            </div>
        )
    }
}

LoginPage.propTypes = {
    err: PropTypes.string,
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired
}

export default LoginPage;