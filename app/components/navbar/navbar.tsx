"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";
import { useRouter } from "next/navigation";
import HeaderSmall from "../HeaderSmall/HeaderSmall";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <HeaderSmall />
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
