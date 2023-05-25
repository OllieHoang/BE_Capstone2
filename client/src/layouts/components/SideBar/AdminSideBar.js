import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { routes } from "./routes";
import logo from "../../../assets/images/logo.png";
import SubMenu from "./SubMenu";
import { MdOutlineArrowBack } from "react-icons/md";
import authApi from "../../../api/authApi";
import { logout } from "../../../redux/actions/auth";
import { destroy } from "../../../redux/actions/cart";

import styles from "./AdminSideBar.module.css";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";

function AdminSideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);
  const { isActive, setIsActive } = useContext(SidebarContext);

  const handleLogout = async () => {
    const resultLogout = await authApi.logout();
    console.log(resultLogout);
    dispatch(logout());
    dispatch(destroy());
    const token = localStorage.getItem("accessToken");
    if (token) {
      localStorage.removeItem("accessToken");
    }
    navigate({ pathname: "/" });
  };
  return (
    <div className={` ${styles.adminSideBar}`}>
      <div className={`flex justify-between items-center ${styles.logo}`}>
        <Link to="/home">
          {/* <img
            src={logo}
            alt=""
          /> */}
          <span>SCIS</span>
        </Link>
        <MdOutlineArrowBack
          className="text-white w-6 h-6 cursor-pointer "
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
      <div className={styles.sidebarContainer}>
        <ul className={styles.navList}>
          {routes.map((item, index) => {
            if (item?.permissions.includes(role)) {
              return <SubMenu item={item} key={index} />;
            } else return null;
          })}
        </ul>

        <ul className={styles.navListBottom}>
          <li className={styles.navItem} onClick={handleLogout}>
            <p className={styles.navLink}>
              <span>Log out</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSideBar;