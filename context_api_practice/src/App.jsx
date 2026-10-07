import React from "react";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Profile from "./components/Profile.jsx";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route index path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
