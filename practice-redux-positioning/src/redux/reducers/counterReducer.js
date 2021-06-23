// import {} from ''
const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    const {type} = action
    switch(type) {
        case "INCREASE_COUNT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREASE_COUNT":
            return {
                ...state,
                count: state.count - 1
            }
        case "RESET_COUNT":
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

export default counterReducer