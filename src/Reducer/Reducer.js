export const ACTIONS = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR',
    FETCH_EMPTY: 'FETCH_EMPTY',
    FETCH_INITIALSTATE: 'FETCH_INITIALSTATE:',
}

export const initialState = {
    loading: true,
    error: '',
    empty: '',
    names: [],
    isEmpty: '',
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
                empty: '',
                isEmpty: true,
            }
        case ACTIONS.FETCH_JAR_SUCCESS:
            return {
                loading: false,
                names2: action.payload,
                error: '',
            }
        case ACTIONS.FETCH_ERROR:
            return {
                loading: false,
                names: [],
                error: 'Something went wrong...'
            }
        case ACTIONS.FETCH_EMPTY:
            return {
                loading: false,
                names: [],
                empty: "Sorry I didn't find anything by name: ",
                isEmpty: false,
            }
        case ACTIONS.FETCH_INITIALSTATE:
            return {
                loading: false,
                names: [],
                empty: "Type a name and get amount of the person: ",
            }
        default:
            return state
    }
}
