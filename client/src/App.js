
import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import NotificationIcon from './components/NotificationIcon/NotificationIcon';
=======
// import bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import donation from './json/donation.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CareCard from './components/CareCard/CareCard';
import NavBar from './components/NavBar/NavBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import LoginPage from './components/LoginPage/LoginPage';
import { Alert } from 'react-bootstrap';

>>>>>>> b8614e3acc4e9570c1898d59b33c88b82c117eac

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

  handleSignUp(credentials){
    const { username, password, confirmPassword } = credentials;
    console.log(credentials)
    if(!username.trim() || !password.trim()){
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {
      fetch("/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res)=>{
        return res.json();
      }).then((data)=>{
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
    console.log(credentials)
    const { username, password } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {
      fetch("/api/sessions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }  
  }

  handleSignOut(event){
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn() {
    return (
<<<<<<< HEAD
      <div className="App">
      <NotificationIcon
        title='Notifications'
      />
        <h1>Care Portal</h1>
        <form action="/api/images" method="post" enctype="multipart/form-data" id="addPhoto"> 
          <input type="file" name="image" />
          <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
        </form>
      </div>
=======
      <Switch>
        <Route
          path='/'
          render={(props)=> <LoginPage {...props} err={this.state.signUpSignInError} onSignUp={this.handleSignUp} onSignIn={this.handleSignIn} error={this.renderError}/>}
        />
      </Switch>
>>>>>>> b8614e3acc4e9570c1898d59b33c88b82c117eac
    );
  }

  renderApp(){
    return(
      <div className="page">
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          {/* <Route 
            exact path="/" 
            render={(props)=> <WelcomePage {...props}/>}
         /> */}
        </Switch>
      </div>
    )
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   // fetch('/api/images', {
  //   //     method: 'POST',
  //   //     headers: {'Content-Type':'multipart/form-data'},
  //   //     body: new FormData(document.getElementById('addPhoto'))
  //   // }).then((response) => response.json())
  //   // .then((data)=>{
  //   //     this.setState({images: data.images});
  //   // })
  // }
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
      // <BrowserRouter>
      // <div className="App">
      //   <NavBar/>
      //   <h1>Care Portal</h1>
      //   {/* <form action="/api/images" method="post" enctype="multipart/form-data" id="addPhoto"> 
      //     <input type="file" name="image" />
      //     <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
      //   </form> */}
      //   <ul>
      //     <CareCard 
      //       donation={donation}
      //     />
      //     <CareCard title={'Food in Round Rock'} description={'lorem ipsum'} />
      //     <CareCard title={'Bedframe in Round Rock'} description={'lorem ipsum'} />
      //   </ul>
      // </div>
      // </BrowserRouter>

      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <div className="page">
          {/* <ul>
          <CareCard 
            donation={donation}
          />
          <CareCard title={'Food in Round Rock'} description={'lorem ipsum'} />
          <CareCard title={'Bedframe in Round Rock'} description={'lorem ipsum'} />
          </ul> */}
            {whatToShow}
            {/* <form action="/api/images" method="post" enctype="multipart/form-data" id="addPhoto"> 
              <input type="file" name="image" />
              <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
            </form> */}
          </div>
        </div>
      </BrowserRouter>
      // <BrowserRouter>
      //   <div className="App">
      //     <h1>Care Portal</h1>
      //     <div className="page">
      //       {whatToShow}
      //       {/* <form action="/api/images" method="post" enctype="multipart/form-data" id="addPhoto"> 
      //         <input type="file" name="image" />
      //         <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
      //       </form> */}
      //     </div>
      //   </div>
      // </BrowserRouter>

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

export default App;
