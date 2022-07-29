import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  Button,
} from "reactstrap";
import { getImageById } from "../../modules/imageManager";
import { getUserById } from "../../modules/userManager";
import { getLoggedInUser } from "../../modules/userManager";
import { deletePost } from "../../modules/postManager";

export const PostCard = ({ post }) => {
  const [postImageUrl, setpostImageUrl] = useState("");
  const [postedBy, setPostedBy] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getImageById(post.imageId).then((blob) => setpostImageUrl(blob));
    getUserById(post.userProfileId).then((blob) => setPostedBy(blob));
    getLoggedInUser().then((blob) => setCurrentUser(blob));
  }, []);

  const handleDeletePost = () => {
    deletePost(post.id);
    window.location.reload();
  };

  return (
    <Card>
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
        <CardSubtitle>By: {postedBy.fullName}</CardSubtitle>
        <CardImg alt="Eat, Purge, Livestream" src={`${postImageUrl}`} />
        <CardText>{post.content}</CardText>
        {currentUser.id == postedBy.id ? (
          <>
            <Button
              onClick={() => {
                navigate(`editPost/${post.id}`, {
                  state: { post: post },
                });
              }}
            >
              Edit
            </Button>
            <Button onClick={handleDeletePost}>Delete</Button>
          </>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};
