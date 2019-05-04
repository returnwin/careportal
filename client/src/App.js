import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginPage from "./components/LoginPage/LoginPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false,
      userId: "",
      images: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("/api/images", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: new FormData(document.getElementById("addPhoto"))
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.images });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Care Portal</h1>
        <form
          action="/api/images"
          method="post"
          enctype="multipart/form-data"
          id="addPhoto"
        >
          <input type="file" name="image" />
          <button type="submit" onSubmit={this.handleSubmit}>
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

export default App;
