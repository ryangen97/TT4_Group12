import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { SidebarData } from "./SidebarData"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const { user } = useAuth()
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>{ user.fullName }</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        {
          SidebarData.map( (item, index) => {
            return(
              <div className={item.cName} key={index}>
                {item.icon}
                <Link to={item.path}>{item.title}</Link>
              </div>
            )
          })
        }
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
