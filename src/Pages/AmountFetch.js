import React, { useReducer, useEffect, useState, useRef } from 'react'
import axios from 'axios'

import { ACTIONS, dataFetchReducer, initialState } from './../Reducer/Reducer';

export default function AmountFetch() {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState)
    const { names, loading, error, empty, isEmpty } = state
    const [Route, setRoute] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_INITIALSTATE })
        axios.get(`https://localhost:5001/names/takeonename?name=${Route}`)
            .then(response => {
                const nameArray = response.data;
                if (nameArray.length >= 0)
                    dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
                else if (nameArray.length === 0 || inputRef.current.value.length !== 0)
                    dispatch({ type: ACTIONS.FETCH_EMPTY });
                else
                    dispatch({ type: ACTIONS.FETCH_INITIALSTATE });
                console.log('response');
            })
            .catch(error => {
                console.log(error, 'error')
                dispatch({ type: ACTIONS.FETCH_ERROR })
            })
    }, [Route])

    function handleSubmit(e) {
        e.preventDefault();
        setRoute(inputRef.current.value)
        if (isEmpty)
            inputRef.current.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} placeholder="Type a name and get amount of the person.." />
                <button className="input_button">Get Amount</button>
            </form>
            {empty ? empty : null}
            {loading ? 'loading ' :
                <div>
                    {names.map(name =>
                        <div key={name.nameGuid}>
                            <div>{name.name1}'s amount is {name.amount}</div>
                        </div>)}
                </div>
            }
            {error ? error : null}
<hr/>
        </div>
    );
}