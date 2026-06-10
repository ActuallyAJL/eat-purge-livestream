import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row } from "reactstrap";
import { getAllPosts } from "../../modules/postManager";
import { PostCard } from "./PostCard";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts().then((dbPosts) => setPosts(dbPosts));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <Button
        onClick={() => {
          navigate("addPost");
        }}
        style={{ margin: "1px" }}
      >
        Add Post
      </Button>
      <Row>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Row>
    </>
  );
};
