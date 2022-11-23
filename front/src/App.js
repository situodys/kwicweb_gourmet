import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./view/NotFound";

import NavBar from "./component/global/NavBar";

import Login from "./view/auth/Login";
import Register from "./view/auth/Register";

import Main from "./view/Main";
import Restaurants from "./view/Restaurants";
import Example from "./view/Example";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Main />} exact={true}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/main"} element={<Main />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/example/*"} element={<Example />}></Route>
          <Route path={"/restaurants"} element={<Restaurants />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
