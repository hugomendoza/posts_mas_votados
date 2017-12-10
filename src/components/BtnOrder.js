import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

export class BtnOrder extends React.Component {
  render() {
    return(
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <div className="order">
              <h3>Orden:</h3>
              <Button primary>Ascendente</Button>
              <Button basic color='blue'>Descendente</Button>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
