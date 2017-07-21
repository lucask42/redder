export default (state = [], action) => {
  switch (action.type) {
    case 'GET_REDDIT':
      return action.data;
    default:
      return state;
  }
};
