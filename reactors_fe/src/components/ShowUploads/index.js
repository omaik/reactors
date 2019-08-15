import React, { Component } from 'react'
import { IndexService } from '../../services/ShowService'
import { Image } from '../../services/ShowService'

class ShowUploads extends Component {
  constructor(props){
    super(props)
    this.state = { uploads: [] }
  };

  componentDidMount() {
    IndexService().then(
      response => { this.setState({uploads: response.data.uploads}) })
    .catch(error => console.log(error))
  }
// {this.props.uploads.map(upload => {
  // <div key={upload.id}>{upload.url_for}</div>
// })}
  renderIndexUploads = () => {
    console.log(this.state.uploads);
    return(
      <Image/>
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
