import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import { ACTIONS, dataFetchReducer, initialState } from '../Reducer/Reducer';
import Sum from '../Components/sum';


export default function SumFetch() {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState)
    const { sum, loading, error } = state

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_INIT })
        axios.get(`https://localhost:5001/names/sum`)
            .then(response => {
                dispatch({ type: ACTIONS.FETCH_SUM_SUCCESS, payload: response.data });
            })
            .catch(error => {
                console.log(error, 'error')
                dispatch({ type: ACTIONS.FETCH_ERROR })
            })
    }, [dispatch])

    return (
        <>
        <Sum sum={sum} loading={loading} error={error} />
        </>
    );
}