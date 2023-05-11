import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import { BsPerson, BsCart2 } from "react-icons/bs";

import NavBar, { NavBarMobile } from "../NavBar";
import Search from "../Search";

import authApi from "../../../api/authApi";
import { logout } from "../../../redux/actions/auth";
import { destroy } from "../../../redux/actions/cart";

import styles from "./Header.module.css";

function Header() {
  console.log("header Render");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

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
    <header className={styles.header}>
      <div className={styles.headerCenter}>
        <Container>
          <div className={styles.headerRow}>
            <NavBarMobile />
            <div className="text-2xl text-red-800 font-medium">
              <Link to={`'/'}`}>SCIS.com.vn</Link>
              {/* <Link to={`/`}>SCIS.com.vn</Link> */}
            </div>
            <div className={styles.search}>
              <Search />
            </div>
            <NavBar />

            <div className={`${styles.headerCenterRight} d-flex`}>
              <div className={styles.headerIcon}>
                {currentUser.email && currentUser.fullName ? (
                  <div
                    className={`w-[200px] flex items-center justify-center flex-col ${styles.account}`}
                  >
                    <img
                      className={styles.avatar}
                      src={currentUser?.avatar?.url}
                      alt=""
                    />
                    <p>{currentUser.fullName}</p>
                    <div className={styles.accountPopup}>
                      {currentUser.role === 0 && (
                        <>
                          <div className={styles.item}>
                            <Link className={styles.popupLink} to="/tai-khoan">
                              My account
                            </Link>
                          </div>
                        </>
                      )}
                      {currentUser.role > 0 && (
                        <>
                          <div className={styles.item}>
                            <Link className={styles.popupLink} to="/admin">
                              Manage Siss
                            </Link>
                          </div>
                        </>
                      )}
                      <div className={styles.item}>
                        <p
                          className={styles.popupLink}
                          onClick={handleLogout}
                          to=""
                        >
                          log out
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to="/dang-nhap">
                    <BsPerson />
                    <p>Account</p>
                  </Link>
                )}
              </div>
              <div className={`flex items-center ${styles.headerIcon}`}>
                <Link to="/gio-hang">
                  <BsCart2 />
                  <p>Cart</p>
                  <span className={styles.count}>{cart.list.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.searchMobile}>
        <Container>
          <Search />
        </Container>
      </div>
    </header>
  );
}

export default memo(Header);
