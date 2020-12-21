import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';
import NameFetch from './Pages/NameFetch.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header';

export default function ContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#152238' : '#F8F8FF',
        color: darkTheme ? '#F8F8FF' : '#152238',
        margin: 'auto',
        width: '100%',
        height: '100%',
    }
    return (
        <>
            <div className="row" style={themeStyles}>
                <button onClick={toggleTheme} >Toggle Theme</button>
                <Header headerText="Hello there! Welcome to the Name Application!"
                paragraph="The application is built using C# .NET Core (Entity Framework) at the backend and React hooks is used at the frontend. Axios has used for data fetching from the backend. Plane CSS was used to create responsive page." />
                <hr />
                <NameFetch />
                <hr />
                <Footer />
            </div>
        </>
    )
}