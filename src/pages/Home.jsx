import React from "react";
import { Link } from "react-router-dom";

// components
import Blum from "../components/img/Blum";

// images
import hexagonImg from "../assets/images/others/hexagon-money.png";
import profileImage from "../assets/images/profile/profile-pic-1.png";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 container pb-5 h-full">
      {/* header */}
      <header className="py-5 mb-3">
        <div className="flex items-center justify-between bg-secondary px-4 py-3.5 rounded-xl md:py-4">
          <div className="flex items-center gap-3.5 md:gap-5">
            <img
              width={36}
              height={36}
              src={hexagonImg}
              className="size-9"
              alt="hexagon image"
            />

            <div className="space-y-0.5">
              {/* title */}
              <div rel="title" className="font-semibold">
                Yig'ilgan tokenlar
              </div>

              {/* subtitle */}
              <div className="text-sm opacity-60">16,367 BP</div>
            </div>
          </div>

          {/* balance history link */}
          <Link
            to="/balance/history"
            className="bg-secondary px-3 py-2 rounded-full text-sm font-semibold"
          >
            Tarix
          </Link>
        </div>
      </header>

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
        <h1 className="text-2xl font-semibold text-center line-clamp-2 mb-8">
          MrYaxyobek
        </h1>

        {/* tokens count */}
        <div className="flex items-center justify-center gap-3.5">
          {/* blum logo icon */}
          <Blum size={32} />

          {/* count */}
          <p className="text-3xl font-semibold text-center">16,376 BP</p>
        </div>
      </div>

      {/* main links wrapper */}
      <div className="space-y-3.5">
        <Link
          to="/docs"
          className="flex items-center justify-center gap-3.5 w-full h-14 rounded-xl border border-white"
        >
          {/* blum logo icon */}
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                stroke="white"
                strokeWidth="2"
                className="fill"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16"
              ></path>
            </g>
          </svg>

          {/* text */}
          <span className="text-lg min-w-[140px] text-start">Ma'lumotlar</span>
        </Link>

        {/* claim */}
        <Link
          to="/claim-tokens"
          className="flex items-center justify-center gap-3.5 w-full h-14 bg-white rounded-xl"
        >
          {/* blum logo icon */}
          <Blum size={20} fill="#000000" />

          {/* text */}
          <span className="text-lg text-black">Tokenlarni yig'ish</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
