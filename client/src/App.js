import React, { Component } from "react";
import "./App.css";
import donation from "./json/donation.json";

import React, { Component } from 'react';
import './App.css';
// import bootstrap css
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import donation from './json/donation.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CareCard from './components/CareCard/CareCard';
import NavBar from './components/NavBar/NavBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import LoginPage from './components/LoginPage/LoginPage';
import { Alert } from 'react-bootstrap';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import { Alert } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false,
      userId: "",
      images: []
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignUp(credentials) {
    const { username, password, confirmPassword } = credentials;
    console.log(credentials);
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {
      fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          const { token } = data;
          localStorage.setItem("token", token);
          this.setState({
            signUpSignInError: "",
            authenticated: token
          });
        });
    }
  }

  handleSignIn(credentials) {
    console.log(credentials);
    const { username, password } = credentials;
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {
      fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          const { token } = data;
          localStorage.setItem("token", token);
          this.setState({
            signUpSignInError: "",
            authenticated: token
          });
        });
    }
  }

  handleSignOut(event) {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn() {
    return (
      <Switch>
        <Route
          path="/"
          render={props => (
            <LoginPage
              {...props}
              err={this.state.signUpSignInError}
              onSignUp={this.handleSignUp}
              onSignIn={this.handleSignIn}
              error={this.renderError}
            />
          )}
        />
      </Switch>
    );
  }

  renderApp() {
    return (
      <div className="page">
        <Switch>
          <Route 
          exact path="/" 
          render={(props)=><WelcomePage token={this.state.authenticated}/>}
          // component={WelcomePage}/>
          />
        </Switch>
      </div>
    );
  }

  
  renderError(){
    return(
        <Alert bsStyle="warning">
            <strong className="signupsigninerr">{this.props.err}</strong>
        </Alert>
    )
  }

  render(){
    let whatToShow = "";
    if(this.state.authenticated){
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar onSignOut={this.handleSignOut}/>
          <div className="page">
            {whatToShow}
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

//       <DonationsList
//         donations={[
//           {
//             itemType: "furniture",
//             itemTitle: "Blue Couch",
//             itemDesc: "Only 2 weeks old!!!",
//             img: {},
//             location: {},
//             date: "5/4/19"
//           }
//         ]}
//       />
