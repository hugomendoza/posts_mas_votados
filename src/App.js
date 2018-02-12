import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import BtnOrder from './components/BtnOrder.js';
import { Template } from './components/Template.js';

class App extends Component {
  render() {
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <h1>Blog Posts Populares</h1>
          </Grid.Column>
        </Grid>
        <BtnOrder />
        <Template />
      </div>
    );
  }
}

export default App;
