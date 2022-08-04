import firebase from "firebase/app";
import "firebase/auth";
import { getToken } from "./authManager";

const baseUrl = "/api/UserProfile";

export const getAllUsers = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getUserById = (id) => {
  return fetch(`${baseUrl}/details/${id}`).then((res) => res.json());
};

// export const updateUser = (user) => {
//   return getToken().then((token) => {
//     return fetch(`${baseUrl}/${user.id}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then(() => {
//         let u = firebase.auth().Auth().currentUser;
//         return u;
//       })
//       .then((u) => {
//         firebase.auth().updateEmail(u, user.email);
//       });
//   });
// };

export const getUserByFirebaseId = (firebase) => {
  return fetch(`${baseUrl}/${firebase}`).then((res) => res.json());
};

export const getLoggedInUser = () => {
  const firebaseUserId = getUserByFirebaseId(
    firebase.auth().currentUser.uid.toString()
  );
  return firebaseUserId;
};
