import React from 'react'
import { Image, Icon, Grid } from 'semantic-ui-react';

export class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
        "id": 1,
        "title": "Manejo de dependencias en Ruby con Bundler",
        "description": "Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.",
        "url": "http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/",
        "votes": 42,
        "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
        "post_image_url": "https://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg"
        },

        {
        "id": 2,
        "title": "Descubre si Make it Real es para ti",
        "description": "En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.",
        "url": "http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/",
        "votes": 43,
        "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
        "post_image_url": "https://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg"
        },
        {
        "id": 3,
        "title": "¿Qué es código?",
        "description": "Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.",
        "url": "http://blog.makeitreal.camp/que-es-codigo/",
        "votes": 44,
        "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
        "post_image_url": "https://blog.makeitreal.camp/assets/images/bg-images/code.jpg"
        },
        {
        "id": 4,
        "title": "Aprende Desarrollo Web gratis",
        "description": "¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.",
        "url": "http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/",
        "votes": 45,
        "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
        "post_image_url": "https://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png"
        }
      ]
    }
  }

  render() {
    return(
      <div>
        {this.state.data.map((post) =>
          <Grid centered columns={10} key={post.id}>
            <Grid.Column width={2}>
              <Image src={post.post_image_url} size='small' />
            </Grid.Column>
            <Grid.Column width={1}>
              <div>
                <Icon color='blue' link name='angle up' />
                <h5>{post.votes}</h5>
                <Icon color='blue' link name='angle down' />
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
              <h3><a href={post.url}>{post.title}</a></h3>
              <p>{post.description}</p>
              <div>
                <span>Escrito por:</span>
                <Image src={post.writer_avatar_url} avatar />
              </div>
            </Grid.Column>
          </Grid>
        )}
      </div>
    );
  }
}
