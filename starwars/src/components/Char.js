import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharList from './CharList';
import './StarWars.css';
import styled from 'styled-components'

const StarWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        max-width: 100%;
        margin-bottom: 15px; `


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
          <StarWrapper>
             {star.map((people,index) =>{
              return  <CharList className="cards"
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
          </StarWrapper> 
    )
  }
  
  export default Char;
 