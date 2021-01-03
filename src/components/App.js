import React, { Component, useState } from "react";
import "./../styles/App.css";


// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [city,setCity] = useState([]);
  const [town,setTown] = useState([]);
  const handleState = (idx) =>{
    if(city.includes(idx)){
      const index = city.indexOf(idx);
      city.splice(index,1);
      setCity([...city]);
    }else{
      city.push(idx);
      setCity([...city]);
    }
  }
  const handleCity = (cidx) =>{
    city.pop();
    setCity([...city]);
    if(town.includes(cidx)){
      const index = town.indexOf(cidx);
      town.splice(index,1);
      setTown([...town]);
    }else{
      town.push(cidx);
      setTown([...town]);
    }
  }
  const handleTown =(tidx) =>{
    town.pop();
    setTown([...town]);
  }
  return (
    <div id="main">
      <ol>
        {states.map((state,idx) =>(
          <li id={"state"+(idx+1)} key={`${state}_${idx}`} onClick={() => handleState(idx)}>{state.name}
          {city.includes(idx)?<ol>
            {state.cities.map((cityName,cidx) => (<li id={"city"+(cidx+1)} key={`${cityName}_${cidx}`} onClick={()=> handleCity(`${idx}_${cidx}`)}>
              {cityName.name}
              {town.includes(`${idx}_${cidx}`)?<ol>
                {cityName.towns.map((townName,tidx) => (<li id={"town" +(tidx+1)} key={`${townName}_${tidx}`} onClick={()=> handleTown(`${cidx}_${tidx}`)}>{townName.name}</li>))}
              </ol>:null}
            </li>
            ))}
          </ol>:null}
          </li>
        ))}
      </ol>

    </div>

    );
  }
export default App;