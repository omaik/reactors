import React, { Component } from 'react'
import ButtonsComponent from '../ButtonsComponent'

class VideosComponent extends Component{
  playVideo(){
    this.refs.vidRef.play();
  }
  pauseVideo() {
    this.refs.vidRef.pause();
  }

  render(){
    return(
      <div>
        <video ref="vidRef"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4">
        </video>
        <ButtonsComponent
          playVideo={this.playVideo.bind(this)}
          pauseVideo={this.pauseVideo.bind(this)}/>
          <br/>
      </div>
    );
  }
}
export default VideosComponent
