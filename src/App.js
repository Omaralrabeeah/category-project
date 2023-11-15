import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";

import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import CreateRecipe from "./pages/CreateRecipe";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Routes>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Home} />
          <Route path="/category" Component={Category} />

          <Route path="/create-recipe" Component={CreateRecipe} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
