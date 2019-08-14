import React, { Component } from 'react'

class SignOut extends Component {

  render() {
    return (
      <div>        
        <form onSubmit={this.props.handleSignOut}>          
          <button type="submit">Sign out</button>
        </form>
      </div>
    );
  }
}

export default SignOut;