import React, { useState, useEffect } from "react";
import { CardBody, Col, Card, CardText } from "reactstrap";
import { getUserById } from "../../modules/userManager";

export const CommentCard = ({ comment }) => {
  const [postedBy, setPostedBy] = useState({});

  useEffect(() => {
    getUserById(comment.userProfileId).then((blob) => setPostedBy(blob));
  }, []);

  return (
    <>
      <Col>
        <Card>
          <CardBody>
            <CardText>{comment.content}</CardText>
            <CardText>-{postedBy.fullName}</CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
