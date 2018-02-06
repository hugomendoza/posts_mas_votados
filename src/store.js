import { createStore } from 'redux';
import data from './data'

function obtainId (value, arr, prop) {
  for (var i = 0; i < arr.lenght; i++) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1;
}

const reducer = (state, action) => {
	if (action.type === 'ME_GUSTA'){
    let data = state.data;
    let index = obtainId(action.post.id,data,'id');
    posts[index]['votes'] = data[index].votes + 1;
    return{
      ...state,
      data: data
    }
  }
  else if (action.type === 'ME_DISGUSTA') {
    let data = state.data;
    let index = obtainId(action.post.id,data,'id');
    posts[index]['votes'] = data[index].votes - 1;
    return{
      ...state,
      data: data
    }
  }
  else if (action.type === 'ORDEN_ASC') {
    let data_asc = state.data;
    data_asc.sort(function (a, b) {
      return a.votes - b.votes;
    });
    return{
      ...state,
      ascendent: true,
      descendent: false,
      data: data_asc
    }
  }
  else if (action.type === 'ORDEN_DES') {
    let data_des = state.data;
    data_des.sort(function (a, b) {
      return b.votes - a.votes;
    });
    return{
      ...state,
      ascendent: false,
      descendent: true,
      data: data_des
    }
  }
  return state;
}

export default createStore(reducer, {data: data, ascendent: false, descendent: false});
