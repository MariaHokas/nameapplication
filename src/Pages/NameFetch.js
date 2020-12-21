import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

import { ACTIONS, dataFetchReducer, initialState } from './../Reducer/Reducer';
import BasicList from '../Components/BasicList';
import SumFetch from '../Pages/SumFetch';
import Robotti from '../Image/robot.png';
import Button from '../Components/Button';
import AmountFetch from './AmountFetch';
import Header2 from '../Components/Header2';


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
        <div className="row">
            <header>
                <Header2 header2Text={'Name database fetch'} />
            </header>
            <div className="col-50">
                <AmountFetch />
                <br />
                <div className="div_image_robot">
                    <img height='400' src={Robotti} alt="Robotti" />
                </div>
            </div>
            <div className="col-50">
                <Button className="list_button" setRoute={setRoute} routeName='mostpopular' buttonDisplayText="Most Popular" />
                <Button className="list_button" setRoute={setRoute} routeName='alphabeticalorder' buttonDisplayText="Alphabetical Order" />
                <BasicList loading={loading} names={names} error={error} />
                <SumFetch />
            </div>
        </div>
    );
}