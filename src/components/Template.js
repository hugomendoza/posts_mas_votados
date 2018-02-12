import React from 'react'
import { Image, Icon, Grid } from 'semantic-ui-react';
import store from '../store';
import {componentWillMount, voteUp, voteDown, updateSortUp, updateSortDown} from '../actionCreators.js'

export class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
    store.subscribe(() => {
      this.setState({
        posts: store.getState().posts
      });
    });

    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  componentWillMount() {
    store.dispatch(componentWillMount());
  }

  voteUp(post){
    store.dispatch(voteUp(post));
    if (store.getState().ascendent === true || store.getState().descendent === true){
      store.getState().ascendent === true ? store.dispatch(updateSortUp()) : store.dispatch(updateSortDown());
    }
  }

  voteDown(post){
    store.dispatch(voteDown(post));
    if (store.getState().ascendent === true || store.getState().descendent === true){
      store.getState().ascendent === true ? store.dispatch(updateSortUp()) : store.dispatch(updateSortDown());
  }
}

  render() {
    var showPost = [];
    this.state.posts.map((post, index) =>
      showPost.push(
        <Grid centered columns={10} key={index}>
          <Grid.Column width={2}>
            <Image src={post.post_image_url} size='small' />
          </Grid.Column>
          <Grid.Column width={1}>
            <div>
              <Icon color='blue' link name='angle up' onClick={() => this.voteUp(post)}/>
              <h5>{post.votes}</h5>
              <Icon color='blue' link name='angle down' onClick={() => this.voteDown(post)} />
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
      )
    );
    return(
      <div>
        {showPost}
      </div>
    );
  }
}
