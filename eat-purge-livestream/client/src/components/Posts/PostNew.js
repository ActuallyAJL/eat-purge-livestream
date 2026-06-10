import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { postPost } from "../../modules/postManager";
import { postImage } from "../../modules/imageManager";

export const PostNew = () => {
  const [post, setPost] = useState({});
  const [image, setImage] = useState();
  const [imageId, setImageId] = useState(0);
  const imageFormData = new FormData();

  const navigate = useNavigate();

  const controlInput = (e) => {
    let target = { ...post };
    target[e.target.id] = e.target.value;
    setPost(target);
  };

  const handleSelectImage = (e) => {
    setImage(...e.target.files);
  };

  const handleSave = (e) => {
    e.preventDefault();
    imageFormData.append("data", image);
    postImage(imageFormData)
      .then((r) => {
        let eyedee = parseInt(r.headers.get("location").split("Image/")[1]);
        setImageId(eyedee);
        return eyedee;
      })
      .then((r) => {
        post.imageId = r;
        const now = Date.now();
        post.createDateTime = new Date(now).toISOString();
        postPost(post).then(navigate("/"));
      });
  };

  return (
    <>
      <h1>Add a New Post</h1>
      <Form onSubmit={handleSave}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            onChange={controlInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Post Body</Label>
          <Input
            id="content"
            type="textarea"
            placeholder="Post Body"
            onChange={controlInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageToUpload">Image: </Label>
          <Input
            id="imageToUpload"
            type="file"
            onChange={handleSelectImage}
            required
          />
        </FormGroup>
        <Button type="submit" required>
          Submit
        </Button>
      </Form>
    </>
  );
};
