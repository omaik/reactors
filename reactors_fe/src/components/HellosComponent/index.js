import React, { Component } from 'react'
import { HellosService } from '../../services/HellosService'

class HellosComponent extends Component {
  constructor(props){
    super(props)
    this.state = { hellos: [] }
  };

  componentDidMount() {
    HellosService().then(response => { this.setState({hellos: response.data.hellos}) })
    .catch(error => console.log(error))
  }

  renderAllHellos = () => {
    console.log(this.state.hellos);
    return(
      <ul>
      { this.state.hellos.map((h, i) =>
        <li key={i}>{h}</li>
      )}
    </ul>
    )
  }

  render() {
    return(
      <div>
        {this.renderAllHellos()}
      </div>
    )
  }
}

export default HellosComponent
