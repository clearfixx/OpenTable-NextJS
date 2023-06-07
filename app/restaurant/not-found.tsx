"use client";

import Image from "next/image";
import errorMascot from "@/public/icons/error.png";
import Link from "next/link";
import router from "next/router";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded text-center">
        <h3 className="text-3xl font-bold">Well, this is embarrasing</h3>
        <p className="text-reg font-bold">We couldn`t find that restaurant</p>
        <p className="mt-6 mb-6 text-sm font-light">Error code 404</p>
        <Link
          href="/"
          className="bg-red-500 text-white font-normal py-2 px-4 rounded-sm shadow"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
