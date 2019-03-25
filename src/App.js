import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchService from "./services/FetchService";
import {Displayer} from "./Displayer";

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.foo}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FetchService
            key={'fetcher1'}
            host={'https://swapi.co/api/'}
            path={'starships/9/'}
            render={(data) => <Displayer key={'displayerkey'} data={data}/>}/>
      </div>
    );
  }
}

export default App;
