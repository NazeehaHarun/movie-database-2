import React, { useState } from "react";
import Header from "../../components/Header/Header";

import { Container, Row, Col, Jumbotron, Card, Toast } from "react-bootstrap";

import FollowButton from "../../components/FollowButton/FollowButton";
import "./OtherUser.css"

const OtherUser = () => {
  
  const [data, setData] = useState({
    name: "Dave McKenney"
  })

  return (
    <div>
      
      <Jumbotron>
      <Container>
          <Row >
              <Col>
              <h1>{data.name}</h1>
              </Col>

              <Col>
              <FollowButton size = "lg" name = {data.name}/>
              </Col>
              
          </Row>

          </Container>
      </Jumbotron>
      
      
      <Container > 
        <Row>
          <Col xs = {8} > 
          
          <h5 className = "h5">Reviews</h5>

          <Card className = "reviewCard">
          <Card.Title >Movie: Lord of the Rings</Card.Title>
            <Card.Text >
              I love Lord of the Rings!
            </Card.Text>
          </Card>

          <Card className = "reviewCard">
          <Card.Title >Movie: Lord of the Rings</Card.Title>
            <Card.Text >
              I love Lord of the Rings!
            </Card.Text>
          </Card>
          </Col>
          

          <Col >Following
          
          <Card className = "followingCard" >
          <Card.Title >Andrew Runka</Card.Title>
            
              <FollowButton size = "sm" name = "Andrew Runka"/>
            
          </Card>

          <Card className = "followingCard">
          <Card.Title >Alina Shaikhet</Card.Title>
            <FollowButton size = "sm" name = "Aline Shaikhet"/>
          </Card>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtherUser;
