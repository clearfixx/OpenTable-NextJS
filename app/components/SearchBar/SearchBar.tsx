"use client";
import { ChangeEvent, FC, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <div className="p-0 relative flex justify-center">
        <svg
          className="absolute w-6 h-6 top-2 left-1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M13,15.9291111 L13,21.5 C13,21.7761424 12.7761424,22 12.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5 L11,15.9291111 C7.60770586,15.4438815 5,12.5264719 5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.5264719 16.3922941,15.4438815 13,15.9291111 Z M12,4 C9.23857625,4 7,6.23857625 7,9 C7,11.7614237 9.23857625,14 12,14 C14.7614237,14 17,11.7614237 17,9 C17,6.23857625 14.7614237,4 12,4 Z"
              fill="#2D333F"
              fillRule="nonzero"
              transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000)"
            ></path>
          </g>
        </svg>
        <input
          className="rounded  mr-3 p-2 pl-9 w-[450px]"
          type="text"
          placeholder="State, city or town"
          value={location}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setLocation(event.target.value)
          }
        />
      </div>
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          if (location === "") return;
          router.push(`/search/?city=${location}`);
          setLocation("");
        }}
      >
        Let&#39;s go
      </button>
    </div>
  );
};

export default SearchBar;
