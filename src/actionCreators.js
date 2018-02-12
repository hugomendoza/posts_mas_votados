const componentWillMount = () => {
  return {
    type: "INITIAL_SORT"
  };
};

const voteUp = post => {
  return {
    type: "ME_GUSTA",
    post
  };
};

const voteDown = post => {
  return {
    type: "ME_DISGUSTA",
    post
  };
};

const updateSortUp = () => {
  return {
    type: 'ORDEN_ASC'
  };
};

const updateSortDown = () => {
  return {
    type: 'ORDEN_DES'
  };
};

export {componentWillMount, voteUp, voteDown, updateSortUp, updateSortDown};
