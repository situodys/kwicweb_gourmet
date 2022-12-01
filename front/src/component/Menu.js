import { MenuList } from "./MenuList";
import { useState, useEffect } from "react";

import customAxios from "../api/customAxios";

const Menu = (props) => {
  const [menuList, setMenuList] = useState([]);

  const handleMenuList = async () => {
    try {
      const response = await customAxios.get("/menus?restaurantId=2");
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setMenuList(handleMenuList());
  }, []);

  return (
    <>
      <div class="album py-5" style={{ backgroundColor: "#fff7ec" }}>
        <div class="container">
          <h1 className="">Menu</h1>
          <p>Last modified: 20/11/12</p>

          <hr></hr>
          <div class="row">
            <MenuList></MenuList>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
