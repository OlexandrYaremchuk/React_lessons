import React from "react";
import { Link } from "react-router-dom";
import s from "./navbar.module.css";
import { nav_data } from "../../utils/lessons_plan.js";

const Navbar = () => {
  return (
    <div className={s.nav_container}>
      <nav>
        <ul>
          {nav_data.map((item) => (
            <li key={item.id} className={s.navItem}>
              <Link className="link" to={item.url} id={item.id}>
                <h2 className={s.link_title}>{item.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
