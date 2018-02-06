const componentWillMount = () => {
  return {
    type: "INITIAL_DATA"
  };
};

const voteUp = data => {
  return {
    type: "ME_GUSTA",
    data
  };
};

const voteDown = post => {
  return {
    type: "ME_DISGUSTA",
    data
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
