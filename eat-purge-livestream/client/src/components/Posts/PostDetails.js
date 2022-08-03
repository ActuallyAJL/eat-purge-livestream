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
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { PostReactionList } from "../PostReactions/PostReactionList";
import { deletePost, getPostById } from "../../modules/postManager";
import { getImageById } from "../../modules/imageManager";
import { getUserById } from "../../modules/userManager";
import { getLoggedInUser } from "../../modules/userManager";
import { CommentList } from "../Comments/CommentList";
import { postComment } from "../../modules/commentManager";

export const PostDetails = () => {
  const [post, setPost] = useState({});
  const [postImageUrl, setpostImageUrl] = useState("");
  const [postedBy, setPostedBy] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [newComment, setNewComment] = useState({});

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

  const controlInput = (e) => {
    let target = { ...newComment };
    target[e.target.id] = e.target.value;
    setNewComment(target);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const now = Date.now();
    const blob = { ...newComment };
    blob.createDateTime = new Date(now).toISOString();
    blob.postId = post.id;
    blob.userProfileId = currentUser.id;
    postComment(blob).then(() => {
      setNewComment(blob);
      setIsAddingComment(false);
    });
  };

  const newCommentCodeArray = [
    <>
      <Form onSubmit={handleAddComment}>
        <FormGroup>
          <Label for="content">New Comment:</Label>
          <Input
            id="content"
            type="textarea"
            placeholder="Comment"
            onChange={controlInput}
          />
        </FormGroup>
        <Button
          onClick={() => {
            setIsAddingComment(false);
          }}
          required
          style={{ margin: "1px" }}
        >
          Cancel
        </Button>
        <Button type="submit" required style={{ margin: "1px" }}>
          Submit
        </Button>
      </Form>
    </>,
    <Button
      onClick={() => {
        setIsAddingComment(true);
      }}
      style={{ margin: "1px" }}
    >
      Add Comment
    </Button>,
  ];

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
          {isAddingComment ? newCommentCodeArray[0] : newCommentCodeArray[1]}
        </CardBody>
        <CardBody>
          <CommentList post={post} key={post.id}></CommentList>
        </CardBody>
      </Card>
    </>
  );
};
