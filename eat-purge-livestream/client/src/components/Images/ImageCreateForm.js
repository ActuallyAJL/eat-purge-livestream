import React, { useEffect, useState } from "react";

export const ImageCreateForm = () => {
  const [image, setImage] = useState([]);

  const handleSelectImage = (e) => {
    setImage([...e.target.files]);
  };

  return (
    <>
      <h1>This is the image upload page</h1>
      <label htmlFor="imageToUpload">Image:</label>
      <input type="file" id="imageToUpload" onChange={handleSelectImage} />
    </>
  );
};
