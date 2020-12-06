import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

import { Container, Row, Col, Jumbotron, Card, Toast } from "react-bootstrap";

import FollowButton from "../../components/FollowButton/FollowButton";
import NavigateButton from "../../components/NavigateButton/NavigateButton";
import "./OtherUser.css";

const OtherUser = ({ match }) => {
  const {
    params: { userId },
  } = match;

  const [data, setData] = useState({
    name: "Dave McKenney",
    following: [
      { Type: "Regular", userName: "Andrew Runka", id: "9" },
      { Type: "Regular", userName: "Alina Shaikhet", id: "10" },
    ],

    reviews: [
      {
        Title: "Lord Of The Rings",
        Score: 10,
        Summary: "Fantastic Movie!",
        FullReview: "I love Lord Of The Rings!",
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`/users/${userId}`)
      .then((response) => {
        const userData = response.data
        console.log(userData.reviewList);
        setData({
          name: userData.userName,
          following: userData.followingPeopleList,
          reviews: userData.reviewList
        })
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log(data);
  let userReviews= [];
  let usersFollowing= [];
  
  data.reviews.forEach(review => {

    userReviews.push(
      <Card className="reviewCard">
      
      <Card.Text>Score: {review.rating}</Card.Text>
      <Card.Text>Summary: {review.summary} </Card.Text>
      <Card.Text>{review.fullReview}</Card.Text>
      </Card>
    );

  });

  data.following.forEach(following => {
    let viewRoute = "";
    if (following.Role === "Director") {
      viewRoute = "viewDirectorPage";
    }
    else if (following.Role === "Writer") {
      viewRoute = "viewWriterPage";
    }
    else if (following.Role === "Actor") {
      viewRoute = "viewActorPage";
    }
    usersFollowing.push(
      <Card className="followingCard">
      <Card.Title>{following.Name}</Card.Title>
      <FollowButton size="sm" name={following.Name} userId = {following._id} />
      <NavigateButton route = {`/${viewRoute}/${following._id}`} text = "Visit"/>
      </Card>
    );

  });

  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>{data.name}</h1>
            </Col>

            <Col>
              <FollowButton size="lg" name={data.name} userId = {userId} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col xs={8}>
            <h5 className="h5">Reviews</h5>

           {userReviews}

          </Col>

          <Col>
            Following
            {usersFollowing}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtherUser;
