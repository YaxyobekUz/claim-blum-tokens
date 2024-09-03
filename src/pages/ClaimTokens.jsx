import React, { useEffect, useRef, useState } from "react";

// components
import Blum from "../components/img/Blum";

const ClaimTokens = () => {
  const countRef = useRef(null);
  const consoleRef = useRef(null);
  const [JWT, setJWT] = useState(null);
  const [loader, setLoader] = useState(false);
  const [tokensCount, setTokensCount] = useState(380);
  const savedToken = localStorage.getItem("gameToken");
  const [requestsCount, setRequestsCount] = useState(1);
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

  // display request response
  const displayRequestResponse = (msg, index) => {
    if (consoleRef) {
      if (typeof index === "number") {
        const num = index + 1;
        consoleRef.current.innerHTML += `<li className="font-normal">- ${num}. ${msg}</li>`;
      } else {
        consoleRef.current.innerHTML += `<li className="font-normal">- ${msg}</li>`;
      }
    }
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
      const points = tokensCount;

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

      // play game
      displayRequestResponse("Tokenlarni yig'ish boshlandi...", i);
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
        const playTime = Math.floor(Math.random() * 11 + 50) * 1000;
        const msToS = playTime / 1000 + "s";
        displayCount(playTime / 1000);
        displayRequestResponse("Tokenlarni yig'ish uchun vaqt: " + msToS, i);
        await wait(playTime);

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
        displayRequestResponse("O'yin holati: " + claimText, i);
        displayRequestResponse("Yig'ilgan tokenlar: " + points, i);

        // sleep 2
        if (requestsCount > 1 && requestsCount - 1 !== i) {
          const sleep = Math.floor(Math.random() * 6 + 15) * 1000;
          const msToS = sleep / 1000 + "s";
          displayCount(sleep / 1000);
          displayRequestResponse("Keyingi o'yin boshlanadi: " + msToS);
          await wait(sleep);
        } else {
          displayRequestResponse("O'yin tugadi!");
        }
      } else {
        setLoader(false);
        displayRequestResponse("Nimadir xato ketdi!", i);
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

              {/* input */}
              <input
                max={400}
                type="number"
                maxLength={3}
                id="tokens-count"
                disabled={loader}
                defaultValue={380}
                name="tokens-count"
                placeholder="Olinadigan tokenni kiriting..."
                onChange={(e) => setTokensCount(Number(e.target.value.trim()))}
              />
            </div>

            {/* requests */}
            <div className="space-y-2.5">
              <label htmlFor="requests">So'rovlar*</label>

              {/* select */}
              <select
                id="requests"
                name="requests"
                className="h-14"
                disabled={loader}
                onChange={(e) => setRequestsCount(Number(e.target.value))}
              >
                <option value="1">1 marta</option>
                <option value="2">2 marta</option>
                <option value="3">3 marta</option>
                <option value="4">4 marta</option>
                <option value="5">5 marta</option>
                <option value="6">6 marta</option>
                <option value="7">7 marta</option>
                <option value="8">8 marta</option>
                <option value="9">9 marta</option>
                <option value="10">10 marta</option>
                <option value="11">11 marta</option>
                <option value="12">12 marta</option>
                <option value="13">13 marta</option>
                <option value="14">14 marta</option>
                <option value="15">15 marta</option>
                <option value="16">16 marta</option>
                <option value="17">17 marta</option>
                <option value="18">18 marta</option>
                <option value="19">19 marta</option>
                <option value="20">20 marta</option>
              </select>
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
            <ul ref={consoleRef} className="py-5 px-3 opacity-50 space-y-2.5">
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
