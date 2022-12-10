import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./view/NotFound";

import NavBar from "./component/global/NavBar";

import Login from "./view/auth/Login";
import Register from "./view/auth/Register";

import Main from "./view/Main";
import Restaurant from "./view/Restaurant";
import Admin from "./view/Admin";

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
          <Route path={"/restaurant/:id"} element={<Restaurant />}></Route>
          <Route path={"/admin"} element={<Admin />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
