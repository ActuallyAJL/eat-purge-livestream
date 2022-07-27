const baseUrl = "/api/Comment";

export const postComment = (comment) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
};

export const deleteComment = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};

export const updateComment = (comment) => {
  return fetch(`${baseUrl}/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
};

export const getAllCommentsByPost = (postId) => {
  return fetch(`${baseUrl}/${postId}`).then((res) => res.json());
};
