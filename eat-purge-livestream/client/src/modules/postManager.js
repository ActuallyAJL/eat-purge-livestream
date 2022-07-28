import { getToken } from "./authManager";

const baseUrl = "/api/Post";

export const postPost = (post) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  });
};

export const updatePost = (post) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${post.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  });
};

export const deletePost = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
};

export const getAllPosts = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};

export const getPostById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};

export const getAllPostsByUserId = (userId) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};
