import React from "react";
// import Image from "../../images/Logo"


const Header = () => {
  return (
    <div className="mx-2">
      <div className="navbar bg-slate-600 text-red-100 md:flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl">
            Ema jon
            {/* <img src={Image} alt="" /> */}
          </a>
        </div>
        <div>
          <ul className="menu md:menu-horizontal">
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Order Review</a>
            </li>
            <li>
              <a>Manage Inventory</a>
            </li>
            <li>
              <a>Log-In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
