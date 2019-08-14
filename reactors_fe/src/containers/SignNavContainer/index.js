import React, { Component } from 'react';
import './index.css';

import SignIn from '../../components/SignInComponent'
import SignOut from '../../components/SignOutComponent'
import SignUp from '../../components/SignUpComponent'

class SignNavContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: null
    }

    this.handleSI = this.handleSI.bind(this);
    this.handleSU = this.handleSU.bind(this);
  }

  handleSI() {    
    const my_form = <div className="signForm"><SignIn handleSignIn={this.props.handleSignIn}/></div>
    this.setState({ form: my_form });
  }

  handleSU() {    
    const my_form = <div className="signForm"><SignUp handleSignUp={this.props.handleSignUp} /></div>
    this.setState({ form: my_form });
  }

  render() {
    let block = null;
    const obj = this.props.user;

    if (!(Object.entries(obj).length === 0 && obj.constructor === Object)) {
      block = <div className="singNav"><p>Hi, {obj.email}</p><SignOut handleSignOut={this.props.handleSignOut}/></div>
    } else {
      block = <div className="singNav"><button onClick={this.handleSI}>Sign in</button> <button onClick={this.handleSU} >Sign up</button></div>
    }

    return (
      <div>{block}{this.state.form}</div>
    );
  }
}

export default SignNavContainer;