import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

import { Container, Row, Col, Jumbotron, Card, Toast } from "react-bootstrap";

import FollowButton from "../../components/FollowButton/FollowButton";
import "./OtherUser.css";

const OtherUser = ({ match }) => {
  const {
    params: { name },
  } = match;

  const [data, setData] = useState({
    name: "Dave McKenney",
    followers: [
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
      .get(`/users?name=${name}`)
      .then((response) => {
        console.log(response);
        console.log(response.data.searchedUser[0].userName);
        setData({
          name: response.data.searchedUser[0].userName,
          followers: response.data.searchedUser[0].followers,
          reviews: response.data.searchedUser[0].reviews
        })
      })
      .catch((err) => {
        console.log(err);
      });
  });

  let userReviews= [];

  data.reviews.forEach(review => {

    userReviews.push(
      <Card className="reviewCard">
      <Card.Title>{review.Title}</Card.Title>
      <Card.Text>Score: {review.Score}</Card.Text>
      <Card.Text>Summary: {review.Summary} </Card.Text>
      <Card.Text>{review.FullReview}</Card.Text>
      </Card>
    );

  });

  let userFollowers= [];

  data.followers.forEach(follower => {

    userFollowers.push(
      <Card className="followingCard">
      <Card.Title>{follower.userName}</Card.Title>
      <FollowButton size="sm" name={follower.userName} />
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
              <FollowButton size="lg" name={data.name} />
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
            {userFollowers}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtherUser;
