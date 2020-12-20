import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'

// import NamesBasic from './NamesBasic';
import { ACTIONS, dataFetchReducer } from './../Reducer/Reducer';
import BasicList from '../Components/BasicList';


const initialState = {
    loading: true,
    error: '',
    names: [],
    names2: [],
}
export default function NameFetch() {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState)
    const { names, loading, error } = state
    const [Route, setRoute] = useState('all')

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_INIT })
        axios.get(`https://localhost:5001/names/${Route}`)
            .then(response => {
                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
                console.log('response');
            })
            .catch(error => {
                console.log(error, 'error')
                dispatch({ type: ACTIONS.FETCH_ERROR })
            })
    }, [Route])

    return (
        <div>
            <button onClick={() => setRoute('all')}>all</button>
            <button onClick={() => setRoute('mostpopular')}>mostpopular</button>
            <button onClick={() => setRoute('alphabeticalorder')}>alphabeticalorder</button>
            <BasicList loading={loading} names={names} error={error} />
        </div>
    );
}