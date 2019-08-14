import React, { Component } from 'react';
import './App.css';
import HellosComponent from './components/HellosComponent'
import UploadersComponent from './components/UploadersComponent'
import ShowUploads from './components/ShowUploads'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Hello, world!</h3>
          <HellosComponent/>
          <UploadersComponent/>
          <ShowUploads/>
        </header>
      </div>
    );
  }
}

export default App;
