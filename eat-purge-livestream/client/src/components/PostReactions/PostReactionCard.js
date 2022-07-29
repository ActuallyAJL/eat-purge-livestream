import React, { useState, useEffect } from "react";
import {
  createPostReaction,
  getPostReactionCount,
} from "../../modules/postReactionManager";
import { getImageById } from "../../modules/imageManager";

export const PostReactionCard = ({ post, reaction, user }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getPostReactionCount(post.id, reaction.id).then((blob) => setCount(blob));
    getImageById(reaction.imageId)
      .then((blob) => setImageUrl(blob))
      .then((r) => setIsLoaded(true));
  }, []);

  const handleAddPr = (e) => {
    e.preventDefault();
    let thisPr = {
      postId: post.id,
      reactionId: reaction.id,
      userProfileId: user.id,
    };
    createPostReaction(thisPr);
    setCount(count + 1);
  };

  return (
    <>
      {isLoaded ? (
        <div style={{ display: "flex" }}>
          <button style={{ border: "none" }} onClick={handleAddPr}>
            <img
              alt="eat,purge,livestream"
              src={imageUrl}
              style={{ maxHeight: "20px", margin: "2px" }}
            />{" "}
          </button>
          <h6 style={{ maxHeight: "20px", margin: "2px" }}>{count}</h6>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
