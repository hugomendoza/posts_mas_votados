import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Blog posts populares</h1>
        </header>
        <Grid container columns={3}>
          <Grid.Column>
            <h1>Las cosas que hay que ver</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Las cosas que hay que ver</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Las cosas que hay que ver</h1>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
