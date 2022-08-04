import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { getImageById } from "../../modules/imageManager";
import { getLoggedInUser } from "../../modules/userManager";
import { postImage, deleteImage } from "../../modules/imageManager";
// import { updateUser } from "../../modules/userManager";

export const UserDetails = () => {
  const [userImageUrl, setUserImageUrl] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [isEdittingUser, setIsEdittingUser] = useState(false);
  const [image, setImage] = useState();
  const [imageId, setImageId] = useState(0);
  const imageFormData = new FormData();

  const navigate = useNavigate();

  useEffect(() => {
    getLoggedInUser().then((blob) => setCurrentUser(blob));
  }, []);

  useEffect(() => {
    getImageById(currentUser.imageId).then((blob) => setUserImageUrl(blob));
  }, [currentUser]);

  const handleSelectImage = (e) => {
    setImage(...e.target.files);
  };

  const controlInput = (e) => {
    let target = { ...currentUser };
    target[e.target.id] = e.target.value;
    setCurrentUser(target);
  };

  // const handleEditUser = (e) => {
  //   e.preventDefault();
  //   deleteImage(currentUser.imageId);
  //   imageFormData.append("data", image);
  //   postImage(imageFormData)
  //     .then((r) => {
  //       let eyedee = parseInt(r.headers.get("location").split("Image/")[1]);
  //       setImageId(eyedee);
  //       return eyedee;
  //     })
  //     .then((r) => {
  //       currentUser.imageId = r;
  //       updateUser(currentUser).then(navigate("accountDetails"));
  //     });
  // };

  const editUserCodeArray = [
    <>
      {/* <Form onSubmit={handleEditUser}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            placeholder={currentUser?.firstName}
            onChange={controlInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            placeholder={currentUser?.lastName}
            onChange={controlInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder={currentUser?.email}
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
      </Form> */}
    </>,
    <>
      <Card style={{ width: "50%", marginLeft: "25%" }}>
        <CardHeader>
          <h1>User Details</h1>
        </CardHeader>
        <CardBody>
          <div>
            <div>
              <CardTitle>{currentUser.fullName}</CardTitle>
            </div>
            <div>
              <CardImg alt="Eat, Purge, Livestream" src={`${userImageUrl}`} />
            </div>
          </div>
          <CardText>{currentUser.email}</CardText>

          {/* <Button
            onClick={() => {
              setIsEdittingUser(true);
            }}
            style={{ margin: "1px" }}
          >
            Edit
          </Button> */}
        </CardBody>
      </Card>
    </>,
  ];

  return <>{isEdittingUser ? editUserCodeArray[0] : editUserCodeArray[1]}</>;
};
