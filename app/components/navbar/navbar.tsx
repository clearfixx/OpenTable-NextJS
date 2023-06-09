"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";
import { useRouter } from "next/navigation";
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import AuthModal from "../AuthModal/AuthModal";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Navbar = () => {
  const router = useRouter();

  const colors = {
    firstFill: "#ee5253",
    secondFill: "#333",
  };

  return (
    <>
      <HeaderSmall />
      <nav className={`${styles.navbar}`}>
        <Link href="/" className="font-bold text-gray-700 text-2xl block w-36">
          <Image src={logo} alt="" width={144} height={32} />
        </Link>
        <div>
          <div className="flex">
            <AuthModal isSignin={true} />
            <AuthModal isSignin={false} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
