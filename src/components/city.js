import React,{useState} from 'react';
import Town from './Town';

function City(props){
    const towns = props.cityObject.towns;
    const [selected, setSelected] = useState(false);
      console.log(props.id+1);
     let cityId = "city" + (props.id + 1);
     function show(){
         setSelected(!selected);
     }
    return(
        <div>
            <button id={cityId} onClick={show} >
                    {props.cityObject.name}
            </button>
            {selected ? (towns.map((town,idx)=> <Town townObject={town} key={idx} id={idx}/> ) ):""}
        </div>
    );
}
export default City;