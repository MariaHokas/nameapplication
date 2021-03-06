export const ACTIONS = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR',
    FETCH_EMPTY: 'FETCH_EMPTY',
    FETCH_SUM_SUCCESS: 'FETCH_SUM_SUCCESS',
}

export const initialState = {
    loading: true,
    error: '',
    names: [],
    sum: [],
}

export const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_INIT:
            return {
                ...state,
                loading: true,
            }
        case ACTIONS.FETCH_SUCCESS:
            return {
                loading: false,
                names: action.payload,
                error: '',
            }
        case ACTIONS.FETCH_ERROR:
            return {
                loading: false,
                names: [],
                error: 'Something went wrong...'
            }
            case ACTIONS.FETCH_SUM_SUCCESS:
                return {
                    loading: false,
                    sum: action.payload,
                    error: '',             
                }
        default:
            return state
    }
}
