const baseUrl = "/api/Reaction";

export const getReactionById = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const getAllReactions = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const createReaction = (reaction) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reaction),
  });
};
