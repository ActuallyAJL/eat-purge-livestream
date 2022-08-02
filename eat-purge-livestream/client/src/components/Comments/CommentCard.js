import React, { useState, useEffect } from "react";
import { CardBody, Col, Card, CardText, Button } from "reactstrap";
import { deleteComment } from "../../modules/commentManager";
import { getUserById } from "../../modules/userManager";
import { getLoggedInUser } from "../../modules/userManager";

export const CommentCard = ({ comment }) => {
  const [postedBy, setPostedBy] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isEdittingComment, setIsEdittingComment] = useState(false);

  useEffect(() => {
    getUserById(comment.userProfileId).then((blob) => setPostedBy(blob));
    getLoggedInUser().then((blob) => setCurrentUser(blob));
  }, []);

  const handleDeleteComment = () => {
    deleteComment(comment.id);
    window.location.reload();
  };

  return (
    <>
      <Col>
        <Card>
          <CardBody>
            <CardText>{comment.content}</CardText>
            <CardText>-{postedBy.fullName}</CardText>
            {currentUser.id == postedBy.id ? (
              <>
                <Button
                  onClick={() => {
                    setIsEdittingComment(true);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={handleDeleteComment}>Delete</Button>
              </>
            ) : (
              ""
            )}
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
