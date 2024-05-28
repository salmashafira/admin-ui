import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; //icon search
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"; //icon theme

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon"
            onClick = {() => dispatch({type: "TOGGLE" })} />
          </div>

          <div className="item">
            <img
              src="https://plus.unsplash.com/premium_photo-1682095667341-349d44c12bad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="avatar"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
