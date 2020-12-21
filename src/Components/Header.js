import React from 'react';
import Robotti from '../Image/robot.png';

export default function Header(props) {
    return (
        <header>
            <h1>{props.headerText}</h1>
            <p>{props.paragraph}</p>
            <div className="header_image_robot">
                    <img height="150" src={Robotti} alt="Robotti" />
                </div>
        </header>
    )
}

