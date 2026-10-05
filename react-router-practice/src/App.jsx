import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import AppLayout from "./components/Layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Github, { getGithubInfo } from "./pages/Github";
import User from "./pages/User";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="github" element={<Github />} />
//           <Route path="user/:userId" element={<User />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "contact", Component: Contact },
        { path: "github", Component: Github, loader: getGithubInfo },
        { path: "user/:userId", Component: User },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
