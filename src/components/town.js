import React from 'react';
function Town(props){
    let townId = "town" + (props.id + 1);
    return(
        <div id={townId}>
            {props.townObject.name}
        </div>
    )
}
export default Town;