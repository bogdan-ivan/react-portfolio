const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "GET_TRANSACTIONS":
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case "TRANSACTIONS_ERROR":
            return {
                ...state,
                error: action.payload
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((transaction: any) => transaction._id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

export default reducer;