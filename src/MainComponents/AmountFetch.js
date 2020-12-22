import React, { useReducer, useEffect, useState, useRef } from 'react'
import axios from 'axios'

import { ACTIONS, dataFetchReducer, initialState } from '../Reducer/Reducer';
import Header3 from '../Components/Header3'
import AmountList from '../Components/AmountList';
import AmountForm from '../Components/AmountForm';


export default function AmountFetch() {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState)
    const { names, loading, error, empty } = state
    const [Route, setRoute] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_INIT })
        axios.get(`https://localhost:5001/names/takeonename?name=${Route}`)
            .then(response => {
                const nameArray = response.data;
                const currentValue = inputRef.current.value
                if (nameArray.length > 0) {
                    dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
                    inputRef.current.value = '';
                }
                else if (currentValue.length > 0 && nameArray.length === 0) {
                    dispatch({ type: ACTIONS.FETCH_EMPTY });
                }
                console.log('response AmountFetch');
            })
            .catch(error => {
                console.log(error, 'error')
                dispatch({ type: ACTIONS.FETCH_ERROR })
            })
    }, [Route])

    function handleSubmit(e) {
        e.preventDefault();
        setRoute(inputRef.current.value)
    }

    return (
        <div>
            <div className="quickSearch">
                <Header3 header3Text="quick search" />
                <AmountForm handleSubmit={handleSubmit} empty={empty} inputRef={inputRef} />
                <AmountList loading={loading} names={names} error={error} />
            </div>
        </div>
    );
}