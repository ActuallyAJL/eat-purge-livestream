const baseUrl = "/api/Post";

export const postPost = (post) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export const updatePost = (post) => {
  return fetch(`${baseUrl}/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export const deletePost = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};

export const getAllPosts = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getPostById = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const getAllPostsByUserId = (userId) => {
  return fetch(`${baseUrl}/user/${userId}`).then((res) => res.json());
};
