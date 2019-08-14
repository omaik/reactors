import React, { Component } from 'react';
import './App.css';
import HellosComponent from './components/HellosComponent';
import UploadersComponent from './components/UploadersComponent';
import VideosComponent from './components/VideosComponent';
// import ShowUploads from './components/ShowUploads'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hello, world!</h2>
          <HellosComponent/>
          <UploadersComponent/>
          <VideosComponent/>
        </header>
      </div>
    );
  }
}

export default App;
