import React, { useState } from "react";
import "./SubNav.css";
function SubNav(props) {
  return (
    <div>
      <nav class="subnav">
        <ul class="submenu">
          <a href="#">
            <li>
              <i
                style={{ fontSize: "15.9px", color: "white" }}
                class="fa fa-bars"
              ></i>{" "}
              All
            </li>
          </a>
          {props.navItems.map((items) => (
            <a href="#">
              <li>{items}</li>
            </a>
          ))}
          <img
            src="/images/prime.jpg"
            style={{
              width: "340px",
              height: "32px",
              marginLeft: "274px",
              marginTop: "-5px",
            }}
          ></img>
        </ul>
      </nav>
    </div>
  );
}
export default SubNav;
