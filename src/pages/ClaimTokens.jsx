import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// components
import Blum from "../components/img/Blum";

// helpers
import { formatDate, formatTime, getRandomNumber } from "../helpers";

// redux
import { useDispatch } from "react-redux";
import { updateUserBalanceHistory } from "../store/slices/userDataSlice";

const ClaimTokens = () => {
  const countRef = useRef(null);
  const dispatch = useDispatch();
  const consoleRef = useRef(null);
  const [JWT, setJWT] = useState(null);
  const [loader, setLoader] = useState(false);
  const savedToken = localStorage.getItem("gameToken");
  const [requestsCount, setRequestsCount] = useState(1);
  const [tokensCount, setTokensCount] = useState("less");
  const [autoScrollDown, setAutoScrollDown] = useState(true);
  const baseUrl = "https://game-domain.blum.codes/api/v1/game/";

  const displayCount = (count) => {
    let s = count;
    let ms = count * 1000;

    if (countRef) {
      countRef.current.innerHTML = s;

      const interval = setInterval(() => {
        s = s - 1;
        countRef.current.innerHTML = s;
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
      }, ms);
    }
  };

  const handleUpdateUserBalanceHistory = (date, amount = 777) => {
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);

    dispatch(
      updateUserBalanceHistory({
        amount: amount,
        date: formattedDate,
        time: formattedTime,
      })
    );
  };

  // display request response
  const displayRequestResponse = (msg, index) => {
    if (consoleRef) {
      if (typeof index === "number") {
        const num = index + 1;
        consoleRef.current.innerHTML += `<li className="font-normal">- ${num}. ${msg}</li>`;
      } else {
        consoleRef.current.innerHTML += `<li className="font-normal">- ${msg}</li>`;
      }

      // scroll to bottom
      if (autoScrollDown) {
        consoleRef.current.scrollTo({
          top: consoleRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  const errResponseAction = (i, removeLoader = true) => {
    if (removeLoader) setLoader(false);
    displayRequestResponse("Nimadir xato ketdi :(", i);
  };

  // wait (sleep)
  const wait = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // start
  const onStart = async () => {
    // add loader
    setLoader(true);

    // claim tokens
    for (let i = 0; i < requestsCount; i++) {
      // claim points
      const points =
        tokensCount === "less"
          ? getRandomNumber(160, 215)
          : getRandomNumber(240, 280);

      // req headers
      const headers = {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${JWT}`,
        origin: "https://telegram.blum.codes",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
      };
      delete headers["content-type"];

      try {
        // play game
        const response = await fetch(baseUrl + "play", {
          method: "POST",
          headers: headers,
        });
        const resData = await response.json();
        const gameId = resData.gameId;

        // claim tokens
        if (gameId) {
          localStorage.setItem("gameToken", JWT);
          displayRequestResponse("Bitta chipta yo'q qilindi!", i);

          // playing
          const playTime = getRandomNumber(45, 63);
          displayCount(playTime);
          displayRequestResponse("Tokenlarni yig'ish: " + `${playTime}s`, i);
          await wait(playTime * 1000);

          // claim tokens
          headers["content-type"] = "application/json";
          delete headers["content-length"];
          const claim = await fetch(baseUrl + "claim", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              points,
              gameId: gameId,
            }),
          });
          const claimText = await claim.text();

          // notification
          handleUpdateUserBalanceHistory(new Date(), points);
          displayRequestResponse("O'yin holati: " + claimText, i);
          displayRequestResponse("Yig'ilgan tokenlar: " + points, i);

          // sleep 2
          if (requestsCount > 1 && requestsCount - 1 !== i) {
            const sleep = getRandomNumber(12, 18);
            displayCount(sleep);
            displayRequestResponse("Keyingi o'yin: " + `${sleep}s`);
            await wait(sleep * 1000);
          } else {
            displayRequestResponse("O'yin tugadi!");
          }
        }
      } catch {
        errResponseAction(i, false);
      }
    }

    // remove loader
    setLoader(false);
  };

  // contents
  return (
    <>
      {/* header */}
      <header className="py-6 border-b-2 border-secondary">
        {/* title wrapper */}
        <div className="container">
          {/* content */}
          <div className="flex flex-col items-center gap-5">
            {/* logo */}
            <Blum size={32} fill="#fff" />

            {/* page title */}
            <h1 className="text-3xl font-bold">Tokenlarni yig'ish</h1>

            {/* homepage link */}
            <Link to="/" className="px-5 py-2.5 rounded-lg bg-white/10">
              Ortga qaytish
            </Link>
          </div>
        </div>
      </header>

      {/* inputs */}
      <div className="pt-5">
        <div className="container">
          <div className="space-y-5">
            {/* JWT */}
            <div className="space-y-2.5">
              <label htmlFor="token">Avtorizatsiya*</label>

              {/* input */}
              <input
                id="token"
                type="text"
                name="token"
                disabled={loader}
                defaultValue={savedToken}
                placeholder="Tokenni bu yerga kiriting"
                onChange={(e) => setJWT(e.target.value.trim())}
              />
            </div>

            {/* tokens count */}
            <div className="space-y-2.5">
              <label htmlFor="tokens-count">Tokenlarni olish*</label>

              {/* select */}
              <select
                className="h-14"
                id="tokens-count"
                disabled={loader}
                name="tokens count"
                onChange={(e) => setTokensCount(e.target.value)}
              >
                <option value="less">Xavfsizroq 160 - 215</option>
                <option value="many">Xavfliroq 240 - 280</option>
              </select>
            </div>

            {/* requests */}
            <div className="space-y-2.5">
              <label htmlFor="requests">O'ynashlar soni*</label>

              {/* input */}
              <input
                type="text"
                id="requests"
                maxLength={2}
                name="requests"
                defaultValue={1}
                disabled={loader}
                placeholder="1 dan 99 gacha"
                onChange={(e) => {
                  const value = e.target.value;

                  // update requests count
                  setRequestsCount(Number(value.trim()));
                  if (value.length > 2) e.target.value = value.slice(0, 2);
                }}
              />
            </div>

            {/* start btn */}
            <button
              disabled={loader}
              onClick={onStart}
              className="flex items-center justify-center gap-3.5 shrink-0 w-full h-14 bg-white rounded-xl disabled:bg-gray-400"
            >
              <span className="text-lg text-black">
                {loader ? <span>Tokenlarni yig'ish...</span> : "Boshlash"}
              </span>
            </button>

            {/* count */}
            <div className="opacity-70">
              <span>Taxminiy kutish vaqti: </span>
              <span ref={countRef}>0</span>
              <span>s</span>
            </div>
          </div>
        </div>
      </div>

      {/* console */}
      <section className="py-5">
        <div className="container">
          <label className="flex items-center gap-3.5 pb-5">
            <input
              defaultChecked
              type="checkbox"
              className="size-5"
              onChange={(e) => setAutoScrollDown(e.target.checked)}
            />

            {/* text */}
            <span className="select-none">Avtomatik pastga surish</span>
          </label>

          {/* console wrapper */}
          <div className="bg-secondary rounded-xl">
            {/* console header */}
            <div className="flex items-center justify-between px-3.5 py-1 border-b-2 border-secondary">
              <h2 className="opacity-70">Konsol</h2>

              {/* clear btn */}
              <button
                className="text-sm opacity-70"
                onClick={() => {
                  if (consoleRef) {
                    consoleRef.current.innerHTML =
                      "<li>- Konsol ishlamoqda...</li>";
                  }
                }}
              >
                Tozalash
              </button>
            </div>

            {/* logs list */}
            <ul
              ref={consoleRef}
              className="max-h-96 overflow-y-auto py-5 px-3 opacity-50 space-y-2.5"
            >
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
              <li>- Konsol ishlamoqda...</li>
            </ul>

            {/* footer */}
            <div className="py-4 border-t-2 border-secondary"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClaimTokens;
