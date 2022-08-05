import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
import { getImageById } from "../../modules/imageManager";
import { getLoggedInUser } from "../../modules/userManager";

export const UserDetails = () => {
  const [userImageUrl, setUserImageUrl] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getLoggedInUser().then((blob) => setCurrentUser(blob));
  }, []);

  useEffect(() => {
    getImageById(currentUser.imageId).then((blob) => setUserImageUrl(blob));
  }, [currentUser]);

  return (
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
            <div style={{ width: "50%" }}>
              <CardImg alt="Eat, Purge, Livestream" src={`${userImageUrl}`} />
            </div>
          </div>
          <CardText>{currentUser.email}</CardText>
        </CardBody>
      </Card>
    </>
  );
};
