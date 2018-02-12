import { createStore } from 'redux';
import posts from './posts'

function obtainId(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1;
}

const reducer = (state, action) => {
  if (action.type === 'ME_GUSTA'){
    let posts = state.posts;
    let index = obtainId(action.post.id,posts,'id');
    posts[index]['votes'] = posts[index].votes + 1;
    return{
      ...state,
      posts: posts
    }
  }
  else if (action.type === 'ME_DISGUSTA') {
    let posts = state.posts;
    let index = obtainId(action.post.id,posts,'id');
    posts[index]['votes'] = posts[index].votes - 1;
    return{
      ...state,
      posts: posts
    }
  }
  else if (action.type === 'ORDEN_ASC') {
    let posts_asc = state.posts;
    posts_asc.sort(function (a, b) {
      return a.votes - b.votes;
    });
    return{
      ...state,
      ascendent: true,
      descendent: false,
      posts: posts_asc
    }
  }
  else if (action.type === 'ORDEN_DES') {
    let posts_des = state.posts;
    posts_des.sort(function (a, b) {
      return b.votes - a.votes;
    });
    return{
      ...state,
      ascendent: false,
      descendent: true,
      posts: posts_des
    }
  }
  return state;
}

export default createStore(reducer, {posts: posts, ascendent: false, descendent: false});
