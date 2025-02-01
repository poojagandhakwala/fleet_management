import React, { useState } from "react";
import Logo from "../assets/hyundai_logo.png";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Menu = ({handleOtherSlide}) => {
  const [open, setOpen] = useState(true);
  const style = {
    position: "relative",
    left: open ? "0px" : "-300px",
    transition: "left ease 1s",
  };

  const handleSlide = () => {
    setOpen(!open);
    handleOtherSlide();
  };

  return (
    <div>
      <div className="flex-col mx-2 text-base text-white max-lg:w-40">
        <img src={Logo} className="w-20 h-12 mb-5 cursor-pointer" />
        {!open && (
          <h4 className="cursor-pointer p-2 flex !text-white transition ease-in duration-[1s]" onClick={()=>handleSlide()}>
            <KeyboardDoubleArrowRightIcon />{" "}
          </h4>
        )}
        <div style={style}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleSlide();
            }}
          >
            <h4 className="cursor-pointer p-2 flex !text-white">
              <KeyboardDoubleArrowLeftIcon /> Slides
            </h4>
          </a>
          <a
            href="/"
            className="bg-white text-gray-700 rounded-xl cursor-pointer py-1 px-1 flex text-start justify-left hover:text-gray-700"
          >
            <WidgetsIcon /> <h4>Fleets</h4>
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default Menu;
