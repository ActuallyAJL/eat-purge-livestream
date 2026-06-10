import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import {
  createPostReaction,
  deletePostReaction,
  getPostReactionCount,
  getPostReactionsByPostAndReaction,
} from "../../modules/postReactionManager";
import { getImageById } from "../../modules/imageManager";

export const PostReactionCard = ({ post, reaction, user }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postReactions, setPostReactions] = useState([]);
  const [myPostReaction, setMyPostReaction] = useState(false);

  useEffect(() => {
    getPostReactionCount(post.id, reaction.id).then((blob) => setCount(blob));
    getPostReactionsByPostAndReaction(post.id, reaction.id).then((blob) =>
      setPostReactions(blob)
    );

    getImageById(reaction.imageId)
      .then((blob) => setImageUrl(blob))
      .then((r) => setIsLoaded(true));
  }, []);

  useEffect(() => {
    postReactions.map((pr) => {
      if (pr.userProfileId === user.id) {
        setMyPostReaction(pr);
      }
    });
  }, [isLoaded]);

  const handleTogglePr = (e) => {
    if (myPostReaction) {
      handleDeletePr(e);
    } else {
      handleAddPr(e);
    }
  };

  const handleAddPr = (e) => {
    e.preventDefault();
    let thisPr = {
      postId: post.id,
      reactionId: reaction.id,
      userProfileId: user.id,
    };
    createPostReaction(thisPr);
    setMyPostReaction(thisPr);
    setCount(count + 1);
  };

  const handleDeletePr = (e) => {
    e.preventDefault();
    deletePostReaction(myPostReaction.id);
    setCount(count - 1);
    setMyPostReaction(false);
  };

  const getPrStyle = () => {
    if (myPostReaction) {
      return;
    } else {
      return {};
    }
  };

  return (
    <>
      {isLoaded ? (
        <div
          style={
            myPostReaction
              ? {
                  display: "flex",
                  border: "solid blue 2px",
                  borderRadius: "10px",
                }
              : { display: "flex", borderRadius: "10px" }
          }
        >
          <button
            style={{ border: "none", margin: "1px", borderRadius: "10px" }}
            onClick={handleTogglePr}
          >
            <img
              alt="eat,purge,livestream"
              src={imageUrl}
              style={{ maxHeight: "20px", margin: "2px", borderRadius: "10px" }}
            />
          </button>
          <h6 style={{ maxHeight: "20px", margin: "2px" }}>{count}</h6>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
