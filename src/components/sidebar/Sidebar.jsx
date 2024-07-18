import "./sidebar.scss";
import { Link } from "react-router-dom"; // import link untuk navigasi menu
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'; //icon dashboard
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; //icon icon
import InventoryIcon from '@mui/icons-material/Inventory'; //icon products
import StoreIcon from '@mui/icons-material/Store'; //icon orders
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; //icon profile
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; //icon logout
import CategoryIcon from '@mui/icons-material/Category'; // icone categories

import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return ( 
    <div className="sidebar"> 

      <div className="top">
        <Link to="/">
          <span className="logo">Alma Store</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <SpaceDashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>

          <p className="title">LIST</p>
          <Link to="/users">
            <li data-testid="users">
              <PeopleAltIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li data-testid="products">
              <InventoryIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon"/>
            <span>Orders</span>
          </li>
          <Link to="/categories">
            <li>
              <CategoryIcon  className="icon"/>
              <span>Categories</span>
            </li>
          </Link>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type : "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type : "DARK"})}></div>
      </div>

    </div>
  );
};

export default Sidebar;