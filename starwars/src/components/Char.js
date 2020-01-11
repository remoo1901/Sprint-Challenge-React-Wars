import React, {useState, useEffect} from 'react';

import axios from "axios";
import CharList from './CharList';


const Char = () => {

    const [star, setStar] = useState([])
  
    useEffect(() => {
      axios
          .get(`https://swapi.co/api/people/`)
          .then((res) => 
              //console.log(res.data)
              setStar(res.data.results)
              )
          .catch(err => console.log('error loading', err))
  
    },[])
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
  
    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
  
    return (
     
        
          
          <div>
          {star.map((x,index) =>{

           return  <CharList key={index} x={x.name} />
          })}
       </div> 

       
    )
  }
  
  export default Char;
  
  /*  name = {star.name}
          height = {star.height}
          mass = {star.mass}
          hair_color = {star.hair_color}
          eye_color = {star.eye_color}
          birth_year = {star.birth_year}
          gender = {star.gender}
          homeworld = {star.homeworld}
          films = {star.films} */