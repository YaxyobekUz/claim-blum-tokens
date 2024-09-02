import React from "react";
import { Link } from "react-router-dom";

// components
import Blum from "../components/img/Blum";

// images
import profileImage from "../assets/images/profile/profile-pic-1.png";

const Balance = () => {
  return (
    <div className="flex flex-col gap-5 container py-5 h-full">
      {/* mid content (profile wrapper) */}
      <div className="flex flex-col items-center justify-center mb-auto">
        {/* profile image */}
        <img
          width={96}
          height={96}
          src={profileImage}
          alt="profile image"
          className="size-24 bg-secondary mx-auto rounded-full mb-5"
        />

        {/* user name */}
        <h1 className="text-2xl text-center line-clamp-2 mb-8">MrYaxyobek</h1>

        {/* user name */}
        <p className="text-center line-clamp-2 font-normal mb-4 opacity-70">
          Jami yig'ilgan tokenlar
        </p>

        {/* tokens count */}
        <div className="flex items-center justify-center gap-3.5">
          {/* blum logo icon */}
          <Blum size={32} />

          {/* count */}
          <p className="text-3xl font-semibold text-center">16,376 BP</p>
        </div>
      </div>

      {/* claim link */}
      <Link
        to="/balance/history"
        className="flex items-center justify-center gap-3.5 w-full h-14 bg-white rounded-xl"
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
