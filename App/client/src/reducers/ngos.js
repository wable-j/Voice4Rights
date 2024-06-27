//client/src/reducers/ngos.js

const ngosReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NGOS':
      return action.payload;
    case 'FETCH_NGO':
      return action;
    case 'UPDATE_CURRENT_NGO':
      return state.map((state) =>
        state._id === action.payload._id ? action.payload : state
      );
    default:
      return state;
  }
};

export default ngosReducer;
