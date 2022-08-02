import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import { getAllCommentsByPost } from "../../modules/commentManager";
import { CommentCard } from "./CommentCard";

export const CommentList = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [hasComments, setHasComments] = useState(false);

  useEffect(() => {
    getAllCommentsByPost(post.id).then((blob) => {
      setComments(blob);
    });
  }, []);

  useEffect(() => {
    setHasComments(comments.length > 0);
  }, [comments]);

  return (
    <>
      {hasComments ? (
        <>
          <h6>Comments:</h6>
          <Col>
            {comments.map((comment) => (
              <CommentCard comment={comment} key={comment.id} />
            ))}
          </Col>{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
};
