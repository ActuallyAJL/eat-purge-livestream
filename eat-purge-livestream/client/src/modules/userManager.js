import firebase from "firebase/app";
import "firebase/auth";

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

export const getLoggedInUser = () => {
  const firebaseUserId = getUserByFirebaseId(
    firebase.auth().currentUser.uid.toString()
  );
  return firebaseUserId;
};
