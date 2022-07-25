import React, { useEffect, useState } from "react";
import { postImage } from "../../modules/imageManager";

export const ImageCreateForm = () => {
  const [image, setImage] = useState();
  const imageFormData = new FormData();

  const handleSelectImage = (e) => {
    setImage(...e.target.files);
  };

  const handleSaveImage = (e) => {
    e.preventDefault();
    imageFormData.append("data", image);
    postImage(imageFormData);
  };

  return (
    <>
      <h1>This is the image upload page</h1>
      <form onSubmit={handleSaveImage}>
        <label htmlFor="imageToUpload">Image:</label>
        <input type="file" id="imageToUpload" onChange={handleSelectImage} />
        <button
          className="btn btn-primary"
          id="imageSubmitButton"
          required
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
