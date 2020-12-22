import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';
import NameFetch from '../MainComponents/NameFetch.js';
import Footer from '../Components/Footer.js';
import Header from '../Components/Header';
import AmountFetch from '../MainComponents/AmountFetch';
import Robotti from '../Image/robot.png';
import Header2 from '../Components/Header2'


export default function ContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#152238' : '#F8F8FF',
        color: darkTheme ? '#F8F8FF' : '#152238',
    }
    return (
        <>
            <div className="container" style={themeStyles}>
                <button onClick={toggleTheme} >Toggle Theme</button>
                <Header headerText="Hello there! Welcome to the Name Application!"
                    paragraph="The application is built using C# .NET Core (Entity Framework) at the backend and React hooks is used at the frontend. Axios has used for data fetching from the database. Plane CSS was used to create responsive page." />
                <hr />
                <header>
                    <Header2 header2Text={'Name database fetch'} />
                </header>
                <div className="row">
                    <div className="col-50">
                        <AmountFetch />
                        <div className="div_image_robot">
                            <img height='400' src={Robotti} alt="Robotti" />
                        </div>
                    </div>
                    <div >
                        <div className="col-50">
                            <NameFetch />
                        </div>
                        <hr />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}