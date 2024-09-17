import React from "react";
import { Link } from "react-router-dom";

// components
import Blum from "../components/img/Blum";

// redux
import { useSelector } from "react-redux";
import ProfileImage from "../components/ProfileImage";

const Balance = () => {
  const { userData } = useSelector((state) => state);
  const userFirstName = userData.info.name;
  const userBalance = userData.balance.amount;

  return (
    <div className="flex flex-col gap-5 container py-5 h-full">
      {/* main content */}
      <div className="flex flex-col items-center justify-center mb-auto">
        {/* profile image */}
        <ProfileImage className="size-24 bg-secondary mx-auto rounded-full mb-5" />

        {/* user name */}
        <h1 className="text-2xl text-center font-bold line-clamp-2 mb-8">
          {userFirstName}
        </h1>

        {/* user name */}
        <p className="text-center line-clamp-2 font-normal mb-4 opacity-70">
          Jami yig'ilgan tokenlar
        </p>

        {/* tokens count */}
        <div className="flex items-center justify-center gap-3.5">
          {/* blum logo icon */}
          <Blum size={32} />

          {/* count */}
          <p className="text-3xl font-semibold text-center">
            {userBalance.toLocaleString()} BP
          </p>
        </div>
      </div>

      {/* history link */}
      <Link
        to="/balance/history"
        className="flex items-center justify-center gap-3.5 shrink-0 w-full h-14 bg-white rounded-xl"
      >
        {/* blum logo icon */}
        <Blum size={20} fill="#000000" />

        {/* text */}
        <span className="text-lg text-black">Balans tarixini ko'rsatish</span>
      </Link>
    </div>
  );
};

export default Balance;
