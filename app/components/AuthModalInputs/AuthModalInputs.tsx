"use client";

import Image from "next/image";
import styles from "./AuthModalInputs.module.scss";
import { useState } from "react";
import showPasswordIcon from "../../../public/icons/eye.svg";
import hidePasswordIcon from "../../../public/icons/eyeoff.svg";
import { IAuthModalInputs } from "@/app/interfaces/AuthModalInterfaces/AuthModalInputs";

const AuthModalInputs = ({
  inputs,
  handleChangeInputs,
  isSignin,
}: IAuthModalInputs) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInputs}
            name="firstName"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInputs}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email Address"
          value={inputs.email}
          onChange={handleChangeInputs}
          name="email"
        />
      </div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
            id="phone"
            value={inputs.phone}
            onChange={handleChangeInputs}
            name="phone"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInputs}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between items-center text-sm relative">
        <input
          type={showPassword ? "text" : "password"}
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInputs}
          name="password"
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
