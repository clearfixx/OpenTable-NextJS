"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import Logo from "../logo/logo";
import IconIcDowm from "./ic-down";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setVisible(!visible);
  };

  const router = useRouter();

  return (
    <>
      <header className={styles.small_header}>
        <nav>
          <ul className={styles.small_header_nav_menu}>
            <li>
              <a href="" onClick={toggleVisible}>
                EN <IconIcDowm width="20px" height="20px" />
              </a>
              <ul
                className={`${styles.small_header_submenu} ${
                  visible ? "opened" : "hidden"
                }`}
              >
                <li>
                  <a href="#">Espaniol</a>
                </li>
                <li className={styles.active}>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Ukrainian</a>
                </li>
                <li>
                  <a href="#">Nederlands</a>
                </li>
                <li>
                  <a href="#">Français</a>
                </li>
                <li>
                  <a href="#">中文</a>
                </li>
                <li>
                  <a href="#">日本語</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <nav className={`${styles.navbar}`}>
        <Link href="/" className="font-bold text-gray-700 text-2xl block w-36">
          <Logo firstFill="#da3743" secondFill="#333" />
        </Link>
        <div>
          <div className="flex">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
              Sign in
            </button>
            <button className="border p-1 px-4 rounded">Sign up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
