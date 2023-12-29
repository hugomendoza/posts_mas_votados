import React from 'react'
import { JSX } from 'react/jsx-runtime';
// import store from '../store';
// import {componentWillMount, voteUp, voteDown, updateSortUp, updateSortDown} from '../actionCreators.js'

export class Template extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     posts: []
  //   }
  //   store.subscribe(() => {
  //     this.setState({
  //       posts: store.getState().posts
  //     });
  //   });

  //   this.voteUp = this.voteUp.bind(this);
  //   this.voteDown = this.voteDown.bind(this);
  // }

  // componentWillMount() {
  //   store.dispatch(componentWillMount());
  // }

  // voteUp(post){
  //   store.dispatch(voteUp(post));
  //   if (store.getState().ascendent === true || store.getState().descendent === true){
  //     store.getState().ascendent === true ? store.dispatch(updateSortUp()) : store.dispatch(updateSortDown());
  //   }
  // }

  // voteDown(post){
  //   store.dispatch(voteDown(post));
  //   if (store.getState().ascendent === true || store.getState().descendent === true){
  //     store.getState().ascendent === true ? store.dispatch(updateSortUp()) : store.dispatch(updateSortDown());
  // }
}

  render() {
    var showPost: string | number | boolean |
    // import {componentWillMount, voteUp, voteDown, updateSortUp, updateSortDown} from '../actionCreators.js'
    React.ReactElement<any, string |
      // import {componentWillMount, voteUp, voteDown, updateSortUp, updateSortDown} from '../actionCreators.js'
      React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | JSX.Element[] | null | undefined = [];
    this.state.posts.map((post: { post_image_url: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; votes: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; url: string | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; writer_avatar_url: string | undefined; }, index: React.Key | null | undefined) =>
      showPost?.push(
        <div key={index}>
          <div>
            <img src={post.post_image_url} alt={post.title} />
          </div>
          <div>
            <div>
              {/* <Icon color='blue' link name='angle up' onClick={() => this.voteUp(post)}/> */}
              <button onClick={() => {}}></button>
              <h5>{post.votes}</h5>
              {/* <Icon color='blue' link name='angle down' onClick={() => this.voteDown(post)} /> */}
              <button onClick={() => {}}></button>
            </div>
          </div>
          <div >
            <h3><a href={post.url}>{post.title}</a></h3>
            <p>{post.description}</p>
            <div>
              <span>Escrito por:</span>
              <img src={post.writer_avatar_url} alt={post.title} />
            </div>
          </div>
        </div>
      )
    );
    return(
      <div>
        {showPost}
      </div>
    );
  }
}
