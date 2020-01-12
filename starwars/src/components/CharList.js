import React from 'react';
import {
    Card,CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import styled from 'styled-components'


  const StyledP =styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 250px;
  max-height: 500px;
  background-color: yellow;
  
  `

  const StyledDiv =styled.div`
  
  `


const CharList = (props) => {

    
  
    return (
        <div>
            <Card >
                 <CardBody>
                 
                          <CardText><StyledP>
                          <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg" alt="Card image cap" />
                          <CardTitle>Name: {props.name}</CardTitle>
                          <StyledDiv>
                          
                          <p>Height: {props.height}</p>
                          <p>Wieght: {props.mass}</p>
                          <p>Hair Color: {props.hair}</p>
                          <p>Skin Color: {props.skin}</p>
                          <p>Eye Color: {props.eye}</p>
                          <p>Date of Birth: {props.birth}</p>
                          <p>Gender: {props.gender}</p>
                          
                          </StyledDiv>
                          </StyledP>
                          </CardText> 
                 </CardBody>
          </Card>
     </div>
      );
  };
  
  export default CharList;
  