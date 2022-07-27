const baseUrl = "/api/PostReaction";

export const createPostReaction = (pr) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pr),
  });
};

export const deletePostReaction = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};

export const getPostReactionCount = (postId, reactionId) => {
  return fetch(`${baseUrl}/${postId}/${reactionId}`).then((res) => res.json());
};
