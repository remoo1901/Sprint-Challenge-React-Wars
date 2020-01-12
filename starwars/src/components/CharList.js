import React from 'react';
import {Card,CardImg, CardBody,CardTitle} from 'reactstrap';
import './StarWars.css';
import styled from 'styled-components'


const Wrapper = styled.div`
            background-color: white;
            max-width: 350px;
            box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin-bottom: 12px;
                          `


const CharList = (props) => {

  
    return (
        <Wrapper>
                <Card>
                          <CardImg top width="100%" src="https://img.wallpapersafari.com/desktop/1280/1024/38/65/Fcx7LA.jpg" alt="Card image cap" />
                          <CardBody>
                          <CardTitle><h2>Name: {props.name}</h2></CardTitle> 
                          <p>Height: {props.height} cm</p>
                          <p>Weight: {props.mass} kg</p>
                          <p>Hair Color: {props.hair}</p>
                          <p>Skin Color: {props.skin}</p>
                          <p>Eye Color: {props.eye}</p>
                          <p>Date of Birth: {props.birth}</p>
                          <p>Gender: {props.gender}</p>
                          </CardBody>
               </Card>
     </Wrapper>
      );
  };
  
  export default CharList;
  