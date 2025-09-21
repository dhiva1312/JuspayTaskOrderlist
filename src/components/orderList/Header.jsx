import React from "react";
import '../../components/orderList/cssStyles/Header.css';
import { PiSidebar } from "react-icons/pi";
import { IoStarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { PiClockCounterClockwise } from "react-icons/pi";
import { PiBellLight } from "react-icons/pi";
const Header = () => {
  return (
    <header
      className="header-section"
    >
        <div className="header-box">
            <div className="inner-box">
                <div className=" iconbox" >
                    <PiSidebar />
                </div>
                <div className="iconbox">
                    <IoStarOutline/>
                </div>

            </div>
            <div className="inner-side-box">
                <div className="innerbox-1">
                    <span>Dashboard</span>
                </div>
                <div className="innerbox-2">
                    /
                </div>
                <div className="innerbox-3">Default</div>
            </div>
        </div>
      <div className="header-big-box">
        <div className="searching-field">
            <div className="search-field">
                <div className="searchicon">
                    <CiSearch/>
                </div>
                <div className="searchtext">
                    <span id="textt">Search</span>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center rounded"
  style={{width: "20px",height: "20px",transform: "rotate(0deg)",   opacity: 1, borderRadius: "8px",color:" #FFFFFF33" }}
>
  ⌘/
</div>

        </div>
        <div className="theme-field">
            <div className="icons-container">
                <MdOutlineLightMode/>
            </div>
            <div className="icons-container">
                <PiClockCounterClockwise/>
            </div>
            <div className="icons-container">
                <PiBellLight/>
            </div>
            <div className="icons-container">
                <PiSidebar />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
