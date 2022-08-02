import React, { useState, useEffect } from "react";
import {
  CardBody,
  Col,
  Card,
  CardText,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";
import { deleteComment, updateComment } from "../../modules/commentManager";
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

  const controlInput = (e) => {
    let target = { ...comment };
    target[e.target.id] = e.target.value;
    comment = { ...target };
  };

  const handleDeleteComment = () => {
    deleteComment(comment.id);
    window.location.reload();
  };

  const handleUpdateComment = (e) => {
    e.preventDefault();
    updateComment(comment);
    setIsEdittingComment(false);
    window.location.reload();
  };

  const editCommentCodeArray = [
    <>
      <Form onSubmit={handleUpdateComment}>
        <FormGroup>
          <Label for="content">Edit Comment:</Label>
          <Input
            id="content"
            type="textarea"
            placeholder={comment.content}
            onChange={controlInput}
          />
        </FormGroup>
        <Button
          onClick={() => {
            setIsEdittingComment(false);
          }}
          required
        >
          Cancel
        </Button>
        <Button type="submit" required>
          Submit
        </Button>
      </Form>
    </>,
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
              <Button onClick={handleDeleteComment}>Delete</Button>,
            </>
          ) : (
            ""
          )}
        </CardBody>
      </Card>
    </Col>,
  ];

  return (
    <>{isEdittingComment ? editCommentCodeArray[0] : editCommentCodeArray[1]}</>
  );
};
