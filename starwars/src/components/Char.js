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
  
    return (
          <div>
             {star.map((people,index) =>{
              return  <CharList
                  key={index} 
                  name = {people.name}
                  height = {people.height}
                  mass = {people.mass}
                  hair = {people.hair_color}
                  skin = {people.skin_color}
                  eye = {people.eye_color}
                  birth = {people.birth_year}
                  gender = {people.gender}
               />
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