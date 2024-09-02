import React from "react";

// components
import Blum from "../components/img/Blum";

const BalanceHistory = () => {
  return (
    <>
      {/* header */}
      <header className="py-6 border-b-2 border-secondary">
        <div className="container">
          {/* content */}
          <div className="flex flex-col items-center gap-5">
            {/* logo */}
            <Blum size={32} fill="#fff" />

            {/* page title */}
            <h1 className="text-3xl font-bold">Balans tarixi</h1>
          </div>
        </div>
      </header>

      {/* list */}
      <ul className="py-5">
        <li className="py-3.5 even:bg-secondary">
          <div className="flex items-center justify-between container">
            {/* details */}
            <div className="space-y-0.5">
              {/* title */}
              <h3 className="">Muvaffaqiyatli</h3>

              {/* time */}
              <p className="text-sm font-normal opacity-60">17:06</p>
            </div>

            {/* tokens count */}
            <span className="text-green-600">+167 BP</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default BalanceHistory;
