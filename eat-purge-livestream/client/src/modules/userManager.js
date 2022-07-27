const baseUrl = "/api/UserProfile";

export const getAllUsers = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getUserById = (id) => {
  return fetch(`${baseUrl}/details/${id}`).then((res) => res.json());
};

export const getUserByFirebaseId = (firebase) => {
  return fetch(`${baseUrl}/${firebase}`).then((res) => res.json());
};
