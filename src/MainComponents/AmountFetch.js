import React, { useReducer, useEffect, useState, useRef } from 'react'
import axios from 'axios'

import { ACTIONS, dataFetchReducer, initialState } from '../Reducer/Reducer';
import Header3 from '../Components/Header3'
import AmountList from '../Components/AmountList';
import AmountForm from '../Components/AmountForm';


export default function AmountFetch() {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState);
    const { names, loading, error } = state;
    const [Route, setRoute] = useState('');
    const childRef = useRef();

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_INIT })
        axios.get(`https://localhost:5001/names/takeonename?name=${Route}`)
            .then(response => {
                    dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });                   
                  setTimeout(() => {
                    childRef.current.value = '';   
                  }, 500);  
            })
            .catch(error => {
                console.log(error, 'error')
                dispatch({ type: ACTIONS.FETCH_ERROR })
            })
    }, [Route])

    function handleSubmit(e) {
        e.preventDefault();
        setRoute(childRef.current.value)
    }

    return ( 
        <div>
            <div className="quickSearch">
                <Header3 header3Text="quick search" />
                <AmountForm handleSubmit={handleSubmit} forwardedRef={childRef}/>
                <AmountList loading={loading} names={names} error={error} forwardedRef={childRef} />
            </div>
        </div>
    );
}