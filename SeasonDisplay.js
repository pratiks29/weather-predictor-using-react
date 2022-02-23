import './SeasonDisplay.css'
import React from 'react';

function getSeason(lat, month){
    if(month>2 && month<9)
    return lat>=0? 'Summer':'Winter'
    else
    return lat>=0? 'Winter': 'Summer';
}
const seasonConfig = { Summer:{text:'Lets hit the beach :)', iconname:'sun'},
                        Winter:{text:'Burr, its chilly', iconname:'snowflake'} 
                    }

const Seasondisplay = function(props){
    console.log(props);
    const season  = getSeason(props.latitude, new Date().getMonth());
     const {text, iconname} = seasonConfig[season];

    return(
        
        <div className={`seasondisplay ${season}`}>
            <i className={`icon-left massive ${iconname} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconname} icon`}/>
            </div>
    );
};

export default Seasondisplay;