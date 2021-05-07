import React, { useEffect } from 'react'
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { SidebarData } from "./SidebarData"
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const { user, logout } = useAuth()

  useEffect(() => {
    console.log(user)
  }, [user])
  let history = useHistory()
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>{user.fullName}</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      {
        user.isAuthenticated ?
          <div className="sidebar__menu">
            {
              SidebarData.map((item, index) => {
                return (
                  <div className={item.cName} key={index}>
                    {item.icon}
                    <NavLink exact={true} activeClassName="active_menu_link" to={item.path}>{item.title}</NavLink>
                  </div>
                )
              })
            }
          </div>
          : ""
      }
      <div className="sidebar__logout">
        <i className="fa fa-power-off"></i>
        {
          user.isAuthenticated ?
            <span onClick={logout} style={{ cursor: "pointer" }}>Log out</span>
            : <span onClick={() => history.push("/login")} style={{ cursor: "pointer" }}>Log in</span>
        }
      </div>
    </div>
  );
};

export default Sidebar;
