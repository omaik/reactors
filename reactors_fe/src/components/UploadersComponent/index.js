import React, { Component } from 'react'
import { FileUpload } from '../../services/UploadersService'

class UploadersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault();
    FileUpload(this.state.file).then((response) => {
      console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>File Upload</h3>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default UploadersComponent