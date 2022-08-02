import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";
import { PostReactionList } from "../PostReactions/PostReactionList";
import { deletePost, getPostById } from "../../modules/postManager";
import { getImageById } from "../../modules/imageManager";
import { getUserById } from "../../modules/userManager";
import { getLoggedInUser } from "../../modules/userManager";
import { CommentList } from "../Comments/CommentList";

export const PostDetails = () => {
  const [post, setPost] = useState({});
  const [postImageUrl, setpostImageUrl] = useState("");
  const [postedBy, setPostedBy] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const { postId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(postId).then((blob) => setPost(blob));
  }, []);

  useEffect(() => {
    getImageById(post.imageId).then((blob) => setpostImageUrl(blob));
    getUserById(post.userProfileId).then((blob) => setPostedBy(blob));
    getLoggedInUser().then((blob) => setCurrentUser(blob));
  }, [post]);

  const handleDeletePost = () => {
    deletePost(post.id);
    navigate("/");
  };

  return (
    <>
      <h1>Post Details</h1>
      <Card style={{ width: "50%", marginLeft: "25%" }}>
        <CardBody>
          <div>
            <div>
              <CardTitle>{post?.title}</CardTitle>
              <CardSubtitle>By: {postedBy?.fullName}</CardSubtitle>
              <PostReactionList
                post={post}
                user={currentUser}
                key={post.id}
              ></PostReactionList>
            </div>
            <div>
              <CardImg alt="Eat, Purge, Livestream" src={`${postImageUrl}`} />
            </div>
          </div>
          <CardText>{post?.content}</CardText>
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
        <CardBody>
          <CommentList post={post} key={post.id}></CommentList>
        </CardBody>
      </Card>
    </>
  );
};
