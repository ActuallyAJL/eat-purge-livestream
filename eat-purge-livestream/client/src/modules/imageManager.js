const baseUrl = "/api/Image";

export const getImageById = (id) => {
  return fetch().then();
};

export const postImage = (image) => {
  console.log(image);
  return fetch(baseUrl, {
    method: "POST",
    body: image,
  });
};

export const deleteImage = (imageId) => {
  return fetch(`${baseUrl}/${imageId}`, {
    method: "DELETE",
  });
};
