import React, {Component} from "react";
import PropTypes from 'prop-types';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';


class LoginPage extends Component{
    render(){
        return(
            <div className="loginPage">
                <SignIn onSignIn={this.props.onSignIn} />
                <SignUp onSignUp={this.props.onSignUp} />
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