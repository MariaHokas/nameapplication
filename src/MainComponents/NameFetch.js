import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

import { ACTIONS, dataFetchReducer, initialState } from '../Reducer/Reducer';
import BasicList from '../Components/BasicList';
import SumFetch from './SumFetch';
import Button from '../Components/Button';

export default function NameFetch() {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState);
    const { names, loading, error } = state;
    const [Route, setRoute] = useState('all');

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
        <div className="table_box">
            <Button className="list_button" setRoute={setRoute} routeName='mostpopular' buttonDisplayText="Most Popular" />
            <Button className="list_button" setRoute={setRoute} routeName='alphabeticalorder' buttonDisplayText="Alphabetical Order" />
            <BasicList loading={loading} names={names} error={error} />
            <SumFetch />
        </div>
    );
}