import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Home } from "./Home";
import { UserDetails } from "./Users/UserDetails";
import { ImageCreateForm } from "./Images/ImageCreateForm";
import { ViewImage } from "./Images/ViewImage";
import { PostList } from "./Posts/PostList";
import { PostNew } from "./Posts/PostNew";
import { PostEdit } from "./Posts/PostEdit";
import { PostDetails } from "./Posts/PostDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <PostList /> : <Navigate to="/login" />}
          />
          <Route path="uploadImage" element={<ImageCreateForm />} />
          <Route path="addPost" element={<PostNew />} />
          <Route path="editPost/:postId" element={<PostEdit />} />
          <Route path="postDetails/:postId" element={<PostDetails />} />
          <Route path="viewImage" element={<ViewImage />} />
          <Route path="accountDetails" element={<UserDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
}
