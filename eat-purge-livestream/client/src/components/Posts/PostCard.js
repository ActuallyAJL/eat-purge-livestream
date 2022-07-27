import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import { getImageById } from "../../modules/imageManager";
import { getUserById } from "../../modules/userManager";

export const PostCard = ({ post }) => {
  const [postImageUrl, setpostImageUrl] = useState("");
  const [postedBy, setPostedBy] = useState({});

  useEffect(() => {
    getImageById(post.imageId).then((blob) => setpostImageUrl(blob));
    getUserById(post.userProfileId).then((blob) => setPostedBy(blob));
  }, []);

  return (
    <Card>
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
        <CardSubtitle>By: {postedBy.fullName}</CardSubtitle>
        <CardImg alt="Eat, Purge, Livestream" src={`${postImageUrl}`} />
        <CardText>{post.content}</CardText>
      </CardBody>
    </Card>
  );
};
