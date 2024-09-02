import React from "react";
import { Link } from "react-router-dom";

// components
import Blum from "../components/img/Blum";

// images
import hexagonImg from "../assets/images/others/hexagon-money.svg";
import profileImage from "../assets/images/profile/profile-pic-1.png";

const Account = () => {
  return (
    <div className="flex flex-col gap-5 container pb-5 h-full">
      {/* header (profile wrapper) */}
      <header className="py-5">
        <div className="flex items-center justify-between bg-secondary px-4 py-3 rounded-xl md:py-4">
          <div className="flex items-center gap-3.5 md:gap-5">
            <img
              width={36}
              height={36}
              src={profileImage}
              className="size-9"
              alt="profile image"
            />

            <div className="space-y-0.5">
              {/* title */}
              <div rel="title" className="font-semibold">
                MrYaxyobek
              </div>

              {/* subtitle */}
              <div className="text-sm opacity-60">Erkak</div>
            </div>
          </div>

          {/* balance history link */}
          <Link
            to="/balance"
            className="bg-secondary px-3 py-1.5 rounded-full text-sm font-bold"
          >
            Balans
          </Link>
        </div>
      </header>

      <div className="mb-auto">
        {/* page title wrapper */}
        <div className="flex items-center gap-4 mb-8">
          {/* logo */}
          <Blum size={28} />

          {/* title */}
          <h1 className="text-xl font-bold sm:text-2xl">
            Ma'lumotlarni tahrirlash
          </h1>
        </div>

        <div className="space-y-5">
          {/* name */}
          <div className="space-y-2.5">
            <label htmlFor="name">Ismingiz*</label>

            {/* input */}
            <input
              id="name"
              name="name"
              type="text"
              maxLength={32}
              autoComplete="off"
              placeholder="Ismingizni bu yerga kiriting"
            />
          </div>

          {/* gender */}
          <div className="space-y-2.5">
            <label htmlFor="gender">Jinsingiz*</label>

            {/* select */}
            <select name="gender" id="gender" className="h-14">
              <option value="man">Erkak</option>
              <option value="woman">Ayol</option>
            </select>
          </div>
        </div>
      </div>

      {/* button */}
      <button className="flex items-center justify-center gap-3.5 shrink-0 w-full h-14 bg-white rounded-xl">
        <span className="text-lg text-black">O'zgartirish</span>
      </button>
    </div>
  );
};

export default Account;
