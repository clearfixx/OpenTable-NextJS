"use client";

import Image from "next/image";
import styles from "./AuthModalInputs.module.scss";
import { useState } from "react";
import showPasswordIcon from "../../../public/icons/eye.svg";
import hidePasswordIcon from "../../../public/icons/eyeoff.svg";

const AuthModalInputs = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="First Name"
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Last Name"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email Address"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Phone"
          id="phone"
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="City"
        />
      </div>
      <div className="my-3 flex justify-between items-center text-sm relative">
        <input
          type={showPassword ? "text" : "password"}
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
        />
        <button
          className="border-none absolute right-2 w-5 h-5"
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          <Image
            src={showPassword ? hidePasswordIcon : showPasswordIcon}
            alt={showPassword ? "Hide password" : "Show password"}
            height={25}
            width={25}
          />
        </button>
      </div>
    </div>
  );
};

export default AuthModalInputs;
