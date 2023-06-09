"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "../AuthModalInputs/AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signincontent: string, signupContent: string) => {
    return isSignin ? signincontent : signupContent;
  };

  const handleChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  return (
    <div>
      <button
        className={`${renderContent(
          "bg-[#247f9e] text-white",
          ""
        )} border p-1 px-5 rounded mr-3 text-sm`}
        onClick={handleOpen}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {renderContent("Sign In", "Create Account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-semibold text-center">
                {renderContent(
                  "Log In To Your Account",
                  "Create Your Opentable Account"
                )}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                handleChangeInputs={handleChangeInputs}
                isSignin={isSignin}
              />
              <button className="uppercase bg-red-600 w-full text-white p-3 rounded-sm text-sm mb-5 disabled:bg-gray-400">
                {renderContent("Login", "Sign Up")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
