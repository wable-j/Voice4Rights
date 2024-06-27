const currentNgoReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_CURRENT_NGO':
        return action.payload;
        default:
            return state;

    }
}

export default currentNgoReducer;