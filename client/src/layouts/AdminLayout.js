import { Outlet } from "react-router-dom";
import AdminSideBar from "./components/SideBar/AdminSideBar";
import styles from "./Layout.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

function AdminLayout() {
  const { isActive, setIsActive } = useContext(SidebarContext);

  const handleActive = () => {
    console.log(isActive);
    setIsActive(!isActive);
  };

  return (
    <div className="flex gap-x-4 s:h-full ">
      <div className={` ${isActive ? "lg:hidden" : "s:hidden lg:block  "} `}>
        <AdminSideBar />
      </div>
      <div
        className={`${
          isActive
            ? `px-1 pt-2 bg-[#495165] h-screen s:h-[1200px] w-20`
            : `px-1 pt-2 bg-[#495165]  h-screen s:h-[1200px] w-20`
        } flex justify-center cursor-pointer `}
        onClick={handleActive}
      >
        <AiOutlineMenu className="text-white " />
      </div>
      {/* <div className={styles.contentWrapperAdmin}> */}
      <div
        className={` ${
          isActive ? "" : "lg:ml-[230px]  lg:w-[80%] s:w-[85%]"
        }  `}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
