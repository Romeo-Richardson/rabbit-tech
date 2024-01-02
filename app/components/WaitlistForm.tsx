"use client";

import React, { useRef, useState } from "react";
import DeviceIcon from "../assets/device-icon.png";
import Image from "next/image";
import axios from "axios";

const WaitlistForm = (): React.ReactNode => {
  const [isRegistered, setIsRegistered] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const createEntry = async (email: FormDataEntryValue | null) => {
    try {
      const date = Date.now().toString();
      const { data } = await axios.post("/api/sendentry", { email, date });
      if (data) {
        setIsRegistered(true);
        console.log(data);
      } else {
        alert("Failed to register");
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <form
      className="absolute bottom-[-50px] flex flex-col gap-4 items-center w-full"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        const email = formData.get("email");
        createEntry(email);
      }}
    >
      <Image src={DeviceIcon} alt="Device icon" unoptimized priority></Image>
      <p className="text-5xl max-md:text-3xl">Jan 09 at 10pm PT</p>
      {isRegistered ? (
        <div className="bg-gray-600 flex justify-center rounded-xl items-center p-2">
          <p>{`Thank you! You're now on our waitlist! `}</p>
        </div>
      ) : (
        <>
          <input
            ref={inputRef}
            name="email"
            type="email"
            required
            className="rounded-2xl p-2 px-4 text-black"
            placeholder="enter email adress"
          ></input>
          <button className="bg-red-600 rounded-2xl px-8 p-2">
            join waitlist
          </button>
        </>
      )}
    </form>
  );
};

export default WaitlistForm;
