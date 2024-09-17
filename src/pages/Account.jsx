import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Blum from "../components/img/Blum";
import ProfileImage from "../components/ProfileImage";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../store/slices/userDataSlice";

const Account = () => {
  // states
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state);
  const userGender = userData.info.gender;
  const userFirstName = userData.info.name;
  const [loader, setLoader] = useState(false);
  const [gender, setGender] = useState(userGender);
  const [firstName, setFirstName] = useState(userFirstName);

  const handleUpdateUserData = () => {
    if (!loader) {
      const newUserData = {
        gender: gender,
        name: firstName,
      };

      // add loader
      setLoader(true);

      // update data
      setTimeout(() => {
        dispatch(updateUserInfo(newUserData));

        // remove loader
        setLoader(false);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col gap-5 container pb-5 h-full">
      {/* header (profile wrapper) */}
      <header className="py-5">
        <div className="flex items-center justify-between bg-secondary px-4 py-3 rounded-xl md:py-4">
          {/* profile */}
          <div className="flex items-center gap-3.5 md:gap-5">
            <ProfileImage />

            <div className="space-y-0.5">
              {/* title */}
              <div
                rel="title"
                className="capitalize font-semibold line-clamp-1"
              >
                {userFirstName}
              </div>

              {/* subtitle */}
              <div className="capitalize text-sm opacity-60">{userGender}</div>
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
              defaultValue={userFirstName}
              placeholder="Ismingizni bu yerga kiriting"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* gender */}
          <div className="space-y-2.5">
            <label htmlFor="gender">Jinsingiz*</label>

            {/* select */}
            <select
              id="gender"
              name="gender"
              className="h-14"
              defaultValue={userGender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Erkak">Erkak</option>
              <option value="Ayol">Ayol</option>
            </select>
          </div>
        </div>
      </div>

      {/* button */}
      <button
        disabled={loader}
        onClick={handleUpdateUserData}
        className="flex items-center justify-center gap-3.5 shrink-0 w-full h-14 bg-white rounded-xl disabled:opacity-50"
      >
        <span className="text-lg text-black">
          {loader ? "O'zgartirish..." : "O'zgartirish"}
        </span>
      </button>
    </div>
  );
};

export default Account;
