import React from 'react'
import { Image, Icon, Grid } from 'semantic-ui-react';

export class Template extends React.Component {
  render() {
    return(
      <div>
        <Grid centered columns={10}>
          <Grid.Column width={2}>
            <Image src='http://blog.makeitreal.camp/images/bg-images/laptop-sublime.jpg' size='small' />
          </Grid.Column>
          <Grid.Column width={1}>
            <div>
              <Icon color='blue' link name='angle up' />
              <h5>42</h5>
              <Icon color='blue' link name='angle down' />
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <h3>Manejo de dependencias en Ruby con Bundler</h3>
            <p>Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.</p>
            <div>
              <span>Escrito por:</span>
              <Image src='//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405' avatar />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
