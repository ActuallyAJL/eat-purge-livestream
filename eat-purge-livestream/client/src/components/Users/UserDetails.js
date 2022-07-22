import React, { useState, useEffect } from "react";

export const UserDetails = ({ getLoggedInUser }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getLoggedInUser().then((u) => setCurrentUser(u));
  }, []);

  return (
    <>
      <h1>Details for currently logged in user:</h1>
      <h3>Id: {currentUser.id}</h3>
      <h3>Name: {currentUser.fullName}</h3>
      <h3>Firebase Id: {currentUser.firebaseUserId}</h3>
      <h3>Email: {currentUser.email}</h3>
      <h3>Accunt Created: {currentUser.createDateTime}</h3>
      <h3>ImageId: {currentUser.imageId}</h3>
    </>
  );
};
