import React from "react";

// components
import Blum from "../components/img/Blum";

// redux
import { useSelector } from "react-redux";

// helpers
import { formatDate, formatTime } from "../helpers";

const BalanceHistory = () => {
  const { userData } = useSelector((state) => state);
  const balanceHistory = userData.balance.history;

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
      {balanceHistory.length > 0 ? (
        <ul className="py-5">
          {balanceHistory.map((transaction, index) => {
            const { amount, time, date } = transaction;
            return (
              <li key={index} className="py-3.5 even:bg-secondary">
                <div className="flex items-center justify-between container">
                  {/* details */}
                  <div className="space-y-1">
                    {/* title */}
                    <h3>Olingan</h3>

                    {/* date & time */}
                    <p className="text-sm font-normal opacity-60">
                      {/* time */}
                      <span className="inline-block mr-3.5 min-w-9">{time}</span>

                      {/* date */}
                      <span>{date}</span>
                    </p>
                  </div>

                  {/* tokens count */}
                  <span className="text-green-600">+{amount} BP</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        // empty data text
        <div className="container py-5 space-y-3.5">
          <h2>Hali hech qanday tokenlar yig'ilmagan!</h2>

          <p className="opacity-70">
            <span>Tokenlarni yig'ish uchun </span>
            <span className="text-blue-500 underline">bu yerga</span>
            <span> bosing</span>
          </p>
        </div>
      )}
    </>
  );
};

export default BalanceHistory;
