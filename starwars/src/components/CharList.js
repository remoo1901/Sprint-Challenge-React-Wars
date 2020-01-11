import React from 'react';


const CharList = (props) => {

    
  
    return (
        <div>
          <h3>Name: {props.name}</h3>
          <h4>Height: {props.height}</h4>
          <h4>Wieght: {props.mass}</h4>
          <h4>Hair Color: {props.hair}</h4>
          <h4>Skin Color: {props.skin}</h4>
          <h4>Eye Color: {props.eye}</h4>
          <h4>Date of Birth: {props.birth}</h4>
          <h4>Gender: {props.gender}</h4>
     </div>
      )
  }
  
  export default CharList;
  