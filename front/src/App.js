import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./view/NotFound";
import Main from "./view/Main";

import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Example from "./view/Example";
import Login from "./view/Login";
import Register from "./view/Register";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes>
          <Route path={"/"} element={<Main />} exact={true}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/example/*"} element={<Example />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
