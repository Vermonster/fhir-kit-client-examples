import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Client from 'fhir-kit-client';

function App() {
  const [capabilityStatement, setCapabilityStatement] = useState("");
  const client = new Client({baseUrl: 'https://r3.smarthealthit.org'});

  return (
    <div className="App">
      <header className="App-header">
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

        <button onClick={ () => {
          client.capabilityStatement().then((data) => {
            setCapabilityStatement(JSON.stringify(data, null, ' '));
          });
        }}>
          Click me
        </button>

        <pre>
          { capabilityStatement }
        </pre>
      </header>
    </div>
  );
}

export default App;
