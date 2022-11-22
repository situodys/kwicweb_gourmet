import { Link } from "react-router-dom";
import userImage from "../view/images/user.png";
// import ManagerImage Later

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark" style={{ height: "4rem" }}>
        <span class="navbar-brand mb-1 h1">
          <Link to="/Register">GOURMET</Link>
        </span>

        <ul class="nav justify-content-end px-4 ">
          <li className="nav-item nav-link active mx-2">
            <Link to="/Main" className="">
              ABOUT US
            </Link>
          </li>
          <li className="nav-item nav-link active mx-2">
            <Link to="/resturants" className="">
              RESTURANTS
            </Link>
          </li>
          <li className="nav-item nav-link active mx-2">
            <Link to="/Main" className="">
              REVIEWS
            </Link>
          </li>
          <li className="nav-item nav-link active mx-2">
            <Link to="/Main" className="">
              PROPOSALS
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Main" className="navbar-brand mb-1 ml-5">
              <img src={userImage} width="30" height="30" alt=""></img>
            </Link>
          </li>
        </ul>

        {/* <div className="col-4">
            <div className="row">
              <div className="col">
                <Link to="/Main" className="">
                  Rei
                </Link>
              </div>
              <div className="col">
                <Link to="/Main">Rei</Link>
              </div>
              <div className="col">
                <Link to="/Main">Rei</Link>
              </div>
              <div className="col">
                <Link to="/Main">Rei</Link>
              </div>
              <img src={userImage} alt="user" width="36" height="36"></img>
            </div>
          </div>*/}
      </nav>
    </>
  );
};

export default NavBar;
