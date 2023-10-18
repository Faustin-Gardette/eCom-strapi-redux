import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bebas text-4xl cursor-pointer">e-Commerce</h1>
      </div>
      <div>
        <ul className="font-manrope text-xl font-semibold flex gap-3">
          <NavLink to="/femme">
            <li>Femmes</li>
          </NavLink>
          <NavLink to="/homme">
            <li>Hommes</li>
          </NavLink>
          <li>Collections</li>
          <li>Accessoires</li>
          <NavLink to="/panier">
            <li className="relative">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute text-[14px] bg-white rounded-full h-6 w-6 flex items-center justify-center -top-3 -right-4 ">
                0
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
