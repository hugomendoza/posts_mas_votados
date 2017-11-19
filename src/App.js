import React, { Component } from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
        <Button animated primary>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default App;
