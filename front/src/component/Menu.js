import { MenuList } from "./MenuList";
import { useState } from "react";

const Menu = (props) => {
  const [menuList, setMenuList] = useState([]);

  return (
    <>
      <div class="album py-5" style={{ backgroundColor: "#fff7ec" }}>
        <div class="container">
          <h1 className="">Reviews</h1>
          <p>Total: 12</p>
          <hr></hr>
          <div class="row">
            <MenuList menuList={menuList}></MenuList>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
