import "./header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className={`header ${collapsed ? "header--collapsed" : ""}`}>
        <div className={"header__logo"}>
          <i className="fab fa-steam-square"></i>
        </div>
        <div className={"header__menu"}>
          <Link to={"/"} className={"header__menu-item"}>
            <i className={"fas fa-dragon"} />{" "}
            <div className={`collapsed__hidden`}>Pokemons</div>
          </Link>
          <Link to={"/account"} className={"header__menu-item"}>
            <i className={"fas fa-user"} />
            <div className={`collapsed__hidden`}>My Profile</div>
          </Link>
          <Link to={"/history"} className={"header__menu-item"}>
            <i className={"fas fa-history"} />
            <div className={`collapsed__hidden`}>History</div>
          </Link>
        </div>
        <div className={"header__action"}>
          <button
            className={"header__action-btn"}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <i className="fas fa-sign-out-alt"></i>{" "}
            <div className={`collapsed__hidden`}>Logout</div>
          </button>
          <div
            className="collapsible-header-trigger"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i
              className={`fas fa-less-than ${collapsed ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
