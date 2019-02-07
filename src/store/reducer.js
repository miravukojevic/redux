
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT': 
            return {
                ...state,
                counter: state.counter + 1,
                results: [this.counter]
            }
        case 'DECREMENT': 
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_COUNTER': 
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBSTRACT_COUNTER': 
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULTS':
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        default:
            return state
    }
    // if(action.type === 'INCREMENT'){
    //     return{
    //         counter: state.counter + 1
    //     }
    // }
    // if(action.type === 'DECREMENT'){
    //     return{
    //         counter: state.counter - 1
    //     }
    // }
    // if(action.type === 'ADD_COUNTER'){
    //     return{
    //         counter: state.counter + action.val
    //     }
    // }
    // if(action.type === 'SUBSTRACT_COUNTER'){
    //     return{
    //         counter: state.counter - action.val
    //     }
    // }
    // return state;
};

export default reducer;