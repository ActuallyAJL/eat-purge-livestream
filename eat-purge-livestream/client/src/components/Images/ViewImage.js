import React, { useState, useEffect } from "react";
import { getImageById } from "../../modules/imageManager";

export const ViewImage = () => {
  let [imageId, setImageId] = useState(0);
  let [imageUrl, setImageUrl] = useState("");

  const handleIdChange = (e) => {
    setImageId(...e.target.value);
  };

  const handleViewImage = (e) => {
    e.preventDefault();
    getImageById(imageId).then((url) => setImageUrl(url));
  };

  const imageHtmlArray = [
    "",
    <>
      <img src={imageUrl} alt="Eat,Purge,Livestream" />
    </>,
  ];

  return (
    <>
      <h1>This is the image viewer page</h1>
      <form onSubmit={handleViewImage}>
        <label htmlFor="imageId">Select Image Id:</label>
        <input
          type="text"
          id="imageId"
          onChange={handleIdChange}
          required
          autoFocus
          className="form-control"
          placeholder="Image Id"
        />
        <button
          className="btn btn-primary"
          id="imageViewSubmitButton"
          required
          type="submit"
        >
          Submit
        </button>
      </form>
      {imageUrl == "" ? imageHtmlArray[0] : imageHtmlArray[1]}
    </>
  );
};
