import React from "react";
import { Link } from "react-router-dom";

// images
import hexagonImg from "../assets/images/others/hexagon-money.png";

const Home = () => {
  return (
    <>
      {/* header */}
      <header className="py-5">
        <div className="container">
          {/* header content */}
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
                <div className="text-sm opacity-60">16,367 ta</div>
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
        </div>
      </header>
    </>
  );
};

export default Home;
