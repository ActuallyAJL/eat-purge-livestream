import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../modules/authManager";
import { postImage } from "../modules/imageManager";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [imageId, setImageId] = useState(0);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [image, setImage] = useState();
  const imageFormData = new FormData();

  const registerClick = (e) => {
    e.preventDefault();
    imageFormData.append("data", image);
    postImage(imageFormData)
      .then((r) => {
        let eyedee = parseInt(r.headers.get("location").split("Image/")[1]);
        setImageId(eyedee);
        return eyedee;
      })
      .then((r) => {
        if (password && password !== confirmPassword) {
          alert("Passwords don't match. Do better.");
        } else {
          const userProfile = {
            firstName,
            lastName,
            email,
            imageId: r,
          };
          register(userProfile, password).then(() => navigate("/"));
        }
      });
  };

  const handleSelectImage = (e) => {
    setImage(...e.target.files);
  };

  return (
    <Form onSubmit={registerClick}>
      <fieldset>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}
