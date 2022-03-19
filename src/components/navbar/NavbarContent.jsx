import React from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCamera,
  AiOutlineUser,
} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavBarDispatch, useNavBarState } from "./context/navbarContext";
import "./navbar.css";

const NavbarContent = () => {
  const {
    homeIsActive,
    photoIsActive,
    messageIsActive,
    profileIsActive,
    settingIsActive,
  } = useNavBarState();
  const dispatch = useNavBarDispatch();

  const handleClick = (dispatchType) => {
    dispatch({
      type: dispatchType,
    });
  };

  const arr = [
    {
      item: "Home",
      icon: <AiOutlineHome className="translate-y-[22px]" />,
      onClick: () => handleClick("homeIsActive"),
      isActive: homeIsActive,
    },
    {
      item: "Profile",
      icon: <AiOutlineUser className="translate-y-[22px]" />,
      onClick: () => handleClick("profileIsActive"),
      isActive: profileIsActive,
    },
    {
      item: "Message",
      icon: <AiOutlineMessage className="translate-y-[22px]" />,
      onClick: () => handleClick("messageIsActive"),
      isActive: messageIsActive,
    },
    {
      item: "Photo",
      icon: <AiOutlineCamera className="translate-y-[22px]" />,
      onClick: () => handleClick("photoIsActive"),
      isActive: photoIsActive,
    },
    {
      item: "Setting",
      icon: <IoSettingsOutline className="translate-y-[22px]" />,
      onClick: () => handleClick("settingIsActive"),
      isActive: settingIsActive,
    },
  ];
  return (
    <div className="fixed bottom-0 bg-[#222327] w-full">
      <div className="navigation flex justify-center items-center relative w-full h-[60px] bg-white rounded-[10px] p-5">
        <ul className="flex w-[350px]">
          {arr.map(({ item, icon, onClick, isActive }, i) => (
            <li
              className={
                isActive
                  ? "list active relative list-none w-[60px] h-[60px] z-10 "
                  : "list relative list-none w-[60px] h-[60px] z-10"
              }
              onClick={onClick}
              key={i}
            >
              <a
                href="#"
                className="flex justify-center items-center relative w-full text-center font-[500]"
              >
                <span className="icon relative block h-[60px] text-[1.5em] text-center duration-500 text-[#222327]">
                  {icon}
                </span>
                <span className="text absolute text-[#222327] font-[400] opacity-0 leading-[0.05em] duration-500 translate-y-[20px]">
                  {item}
                </span>
              </a>
            </li>
          ))}

          <div className="indicator absolute top-[-50%] w-[60px] h-[60px] bg-[#956be8] rounded-full border-[6px] border-[#222327] duration-500"></div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarContent;
