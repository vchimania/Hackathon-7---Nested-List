import React from 'react';
import City from './City';
import { useState } from 'react';

function State(props) {
     //console.log(props.idx+1);
     const cities=props.stateObj.cities;
     const [selected, setSelected] = useState(false);
     //console.log("props", props);
     let stateId = "state" + (props.idx + 1); 
    function show(){
        
            setSelected(!selected);
        
    }
    return (
        <div>
            <button id={stateId} onClick={show}>
                {props.stateObj.name}
            </button>
            {selected ? (cities.map((city, idx) => <City cityObject={city} id={idx} key={idx}/>)):""}
        </div>
        

    );

}

export default State;