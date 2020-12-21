import React from 'react';

export default function Button({setRoute, routeName, buttonDisplayText, className}) {
    return (
        <>
            <button className={className} onClick={() => setRoute(routeName)}>{buttonDisplayText}</button>
        </>
    )
}