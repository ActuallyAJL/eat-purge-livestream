import React, { useState, useEffect } from "react";
import { getAllReactions } from "../../modules/reactionManager";
import { PostReactionCard } from "./PostReactionCard";

export const PostReactionList = ({ post, user }) => {
  const [reactions, setReactions] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllReactions()
      .then((blob) => setReactions(blob))
      .then(() => setIsLoaded(true));
  }, []);

  return (
    <>
      {isLoaded ? (
        <div style={{ display: "flex", maxWidth: "60%", flexWrap: "wrap" }}>
          {reactions.map((reaction) => (
            <PostReactionCard
              post={post}
              reaction={reaction}
              user={user}
              key={reaction.id}
            ></PostReactionCard>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
