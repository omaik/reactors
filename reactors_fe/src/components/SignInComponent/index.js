import React, { Component } from 'react'

class SignIn extends Component {

  render() {
    return (
      <div id="sign-in-form">
        <h2>Sign In</h2>
        <form onSubmit={this.props.handleSignIn}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input name="email" id="email" type="email" />
          </div>          
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input name="password" id="password" type="password" />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;