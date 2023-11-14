import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Home} />
        <Route path="/category" Component={Category} />
      </Routes>
    </div>
  );
}

export default App;
