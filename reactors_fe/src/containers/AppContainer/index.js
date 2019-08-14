import React, { Component } from 'react';
import '../../App.css';
import HellosComponent from '../../components/HellosComponent'
import SignNavContainer from '../SignNavContainer'

import { UserInfoService } from '../../services/UserInfoService'
import { SignInService } from '../../services/SignInService'
import { SignOutService } from '../../services/SignOutService'
import { SignUpService } from '../../services/SignUpService'


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  authUser() {
    let token = "Bearer " + localStorage.getItem("jwt");
    let headers = {'Authorization': token };

    UserInfoService(headers).then(response => { this.setState({user: response.data.user})})
    .catch(error => {console.log(error)})
  }

  handleSignIn (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"api_v1_user": {"email": email, "password": password}};

    SignInService(request)
    .then(response => { 
      localStorage.setItem("jwt", response.data.user.token);
      this.authUser();
      console.log('User was successfully signed in');
    })
    .catch(error => {console.log('error', error)});

    document.getElementById("sign-in-form").hidden = true;
  }  

  handleSignOut (event) {
    let token = "Bearer " + localStorage.getItem("jwt");
    let headers = {'Authorization': token };

    SignOutService(headers).then(response => { 
      console.log('User was successfully signed out');
      localStorage.removeItem('jwt');
      this.setState({ user: {} }); 
    })
    .catch(error => {console.log(error)})
  }

  handleSignUp (event) {
    event.preventDefault();
    const email = document.getElementById('up_email').value;
    const password = document.getElementById('up_password').value;
    const passwordConfirmation = document.getElementById('up_password_confirmation').value;
    const request = {"api_v1_user": {"email": email, "password": password, "password_confirmation": passwordConfirmation}};

    SignUpService(request)
    .then(response => { 
      console.log('User was successfully created');
    })
    .catch(error => {console.log('error', error)});

    document.getElementById("sign-up-form").hidden = true;
  }  

  render() {
    return (
      <div className="App">
        <SignNavContainer user={this.state.user} handleSignIn={this.handleSignIn} handleSignUp={this.handleSignUp} handleSignOut={this.handleSignOut} />
        <header className="App-header">   
          <h2>Hello, world!</h2>
          <HellosComponent/>
        </header>
      </div>
    );
  }
}

export default AppContainer;
