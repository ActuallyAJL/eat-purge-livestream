import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updatePost } from "../../modules/postManager";
import { postImage, deleteImage } from "../../modules/imageManager";

export const PostEdit = () => {
  const [post, setPost] = useState();
  const [image, setImage] = useState();
  const [imageId, setImageId] = useState(0);
  const imageFormData = new FormData();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setPost(location.state.post);
  }, []);

  const handleSelectImage = (e) => {
    setImage(...e.target.files);
  };

  const controlInput = (e) => {
    let target = { ...post };
    target[e.target.id] = e.target.value;
    setPost(target);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    deleteImage(post.imageId);
    imageFormData.append("data", image);
    postImage(imageFormData)
      .then((r) => {
        let eyedee = parseInt(r.headers.get("location").split("Image/")[1]);
        setImageId(eyedee);
        return eyedee;
      })
      .then((r) => {
        post.imageId = r;
        updatePost(post).then(navigate("/"));
      });
  };

  return (
    <>
      <h1>Edit Post</h1>
      <Form onSubmit={handleUpdate}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder={post?.title}
            onChange={controlInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Post Body</Label>
          <Input
            id="content"
            type="textarea"
            placeholder={post?.content}
            onChange={controlInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageToUpload">Change Image: </Label>
          <Input id="imageToUpload" type="file" onChange={handleSelectImage} />
        </FormGroup>
        <Button type="submit" required>
          Submit
        </Button>
      </Form>
    </>
  );
};
