import React, { Component } from 'react'

class SignUp extends Component {

  render() {
    return (
      <div id="sign-up-form">
        <h2>Sign Up</h2>
        <form onSubmit={this.props.handleSignUp}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input name="email" id="up_email" type="email" className="form-control" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input name="password" id="up_password" type="password" className="form-control" />
          </div>
          <div>
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <br />
            <input name="password_confirmation" id="up_password_confirmation" type="password" className="form-control" />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;