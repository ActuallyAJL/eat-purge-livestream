import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "reactstrap";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { onLoginStatusChange } from "./modules/authManager";
import { getPostReactionCount } from "./modules/postReactionManager";

function App({ getLoggedInUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} getLoggedInUser={getLoggedInUser} />
      <ApplicationViews
        isLoggedIn={isLoggedIn}
        getLoggedInUser={getLoggedInUser}
      />
    </Router>
  );
}

export default App;
