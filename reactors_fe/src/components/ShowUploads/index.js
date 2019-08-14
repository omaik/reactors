import React, { Component } from 'react'
import { ShowService } from '../../services/ShowService'

class ShowUploads extends Component {
  constructor(props){
    super(props)
    this.state = { uploads: [] }
  };

  componentDidMount() {
    ShowService().then(response => { this.setState({uploads: response.data.uploads}) }) 
    .catch(error => console.log(error))
  }
//
  renderIndexUploads = () => {
    console.log(this.state.uploads);
    return(
      <img alt="" src={this.props.uploads} />
    )
  }

  render() {
    return(
      <div>
        {this.renderIndexUploads()}
      </div>
    )
  }
}

export default ShowUploads
