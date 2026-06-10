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
  Col,
} from "reactstrap";
import { getImageById } from "../../modules/imageManager";
import { getUserById } from "../../modules/userManager";
import { getLoggedInUser } from "../../modules/userManager";
import { deletePost } from "../../modules/postManager";
import { PostReactionList } from "../PostReactions/PostReactionList";

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
    <Col sm="4">
      <Card>
        <CardBody>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%" }}>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>By: {postedBy.fullName}</CardSubtitle>
              <PostReactionList
                post={post}
                user={currentUser}
                key={post.id}
              ></PostReactionList>
            </div>
            <div style={{ width: "50%" }}>
              <CardImg alt="Eat, Purge, Livestream" src={`${postImageUrl}`} />
            </div>
          </div>
          <CardText>{post.content}</CardText>
          {currentUser.id == postedBy.id ? (
            <>
              <Button
                onClick={() => {
                  navigate(`editPost/${post.id}`, {
                    state: { post: post },
                  });
                }}
                style={{ margin: "1px" }}
              >
                Edit
              </Button>
              <Button onClick={handleDeletePost} style={{ margin: "1px" }}>
                Delete
              </Button>
            </>
          ) : (
            ""
          )}
          <Button
            onClick={() => {
              navigate(`postDetails/${post.id}`);
            }}
            style={{ margin: "1px" }}
          >
            Details
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
