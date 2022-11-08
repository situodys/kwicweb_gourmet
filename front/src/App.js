import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./view/NotFound";
import Main from "./view/Main";
import Header from "./component/Header";
import Example from "./view/Example";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Main/>}></Route>
                    <Route path={"/example/*"} element={<Example/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
