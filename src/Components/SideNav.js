import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FaHome, FaUser, FaQuoteRight, FaSignOutAlt } from "react-icons/fa";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import MyMoves from "./MyMoves";
import MyProfile from "./MyProfile";
import GetQuote from "./GetQuote";
import Logout from "./Logout";
import "./SideBar.css";

const SideBar = () => {
  const handleMenuItemClick = (event) => {
    const menuItems = document.querySelectorAll(".sidebar-menu-item");
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");
  };

  return (
    <div className="row fixed">
      <div className="col-1 col-lg-2 mt-5 mb-5">
        <div style={{ height: "50vh", fontSize: "100%" }}>
          <CDBSidebar
            style={{ paddingTop: "0px", minWidth: "100px", width: "230px" }}
            className="sidebar"
          >
            <CDBSidebarContent className="sidebar-content" textColor="white">
              <CDBSidebarMenu>
                <NavLink to="my_moves">
                  <CDBSidebarMenuItem
                    onClick={handleMenuItemClick}
                    className="sidebar-menu-item"
                  >
                    <FaHome className="sidebar-icon" />
                    My Moves
                  </CDBSidebarMenuItem>
                </NavLink>
                <hr />
                <NavLink to="my_profile">
                  <CDBSidebarMenuItem
                    onClick={handleMenuItemClick}
                    className="sidebar-menu-item"
                  >
                    <FaUser className="sidebar-icon" />
                    My Profile
                  </CDBSidebarMenuItem>
                </NavLink>
                <hr />
                <NavLink to="get_quote">
                  <CDBSidebarMenuItem
                    onClick={handleMenuItemClick}
                    className="sidebar-menu-item"
                  >
                    <FaQuoteRight className="sidebar-icon" />
                    Get Quote
                  </CDBSidebarMenuItem>
                </NavLink>
                <hr />
                <NavLink to="log_out">
                  <CDBSidebarMenuItem
                    onClick={handleMenuItemClick}
                    className="sidebar-menu-item"
                  >
                    <FaSignOutAlt className="sidebar-icon" />
                    Log Out
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      </div>
      <div className="col col-lg-10 mt-5">
        <Routes>
          <Route path="/" element={<MyMoves />} />
          <Route path="/my_moves" element={<MyMoves />} />
          <Route path="/my_profile" element={<MyProfile />} />
          <Route path="/get_quote" element={<GetQuote />} />
          <Route path="/log_out" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default SideBar;
