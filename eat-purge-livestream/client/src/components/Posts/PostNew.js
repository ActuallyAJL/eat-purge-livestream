import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { postPost } from "../../modules/postManager";
import { postImage } from "../../modules/imageManager";
import { getLoggedInUser } from "../../modules/userManager";

export const PostNew = () => {
  const [post, setPost] = useState({});
  const [image, setImage] = useState();
  const [imageId, setImageId] = useState(0);
  const imageFormData = new FormData();

  const navigate = useNavigate();

  useEffect(() => {
    post.imageId = imageId;
  }, [image]);

  useEffect(() => {
    postPost(post).then(navigate("/"));
  }, [post.imageId]);

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
    post.createDateTime = Date.now;
    imageFormData.append("data", image);
    postImage(imageFormData).then((r) => {
      setImageId(parseInt(r.headers.get("location").split("Image/")[1]));
    });
  };

  return (
    <>
      <h1>Add a New Post</h1>
      <Form onSubmit={() => handleSave()}>
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
          <Input id="imageToUpload" type="file" onChange={handleSelectImage} />
        </FormGroup>
        <Button type="submit" required>
          Submit
        </Button>
      </Form>
    </>
  );
};
