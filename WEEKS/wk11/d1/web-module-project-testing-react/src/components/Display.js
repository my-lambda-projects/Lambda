import React, { useState } from 'react';

import Loading from "./Loading";
import Show from "./Show";

import fetchShow from '../api/fetchShow';

const Display = (props) => {
    const [show, setShow] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState("none");

    const { displayFunc } = props;
    const handleClick = () => {
        fetchShow().then(data => {
            setShow(data);

            if (displayFunc) {
                displayFunc();
            }

        });
    }
        
    const handleSelect = e => {
        setSelectedSeason(e.target.value);
    };

    return (
        <div>
            <img className="poster-img" src='http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg' alt="header image" />
            <br/>
            { !show ? <button onClick={handleClick}>Press to Get Show Data</button> :<Show show={show} selectedSeason={selectedSeason} handleSelect={handleSelect}/> }
        </div>
    );
}

export default Display;