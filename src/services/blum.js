import axios from "axios";

export const playBlum = async ({ token }) => {
  try {
    // response
    const response = await axios.post(
      "https://game-domain.blum.codes/api/v1/game/play",
      {
        headers: {
          priority: "u=1, i",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "sec-fetch-site": "same-site",
          authorization: `Bearer ${token}`,
          "sec-ch-ua-platform": '"Windows"',
          "accept-language": "en-US,en;q=0.9",
          origin: "https://telegram.blum.codes",
          accept: "application/json, text/plain, */*",
          "sec-ch-ua":
            '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
        },
      }
    );

    // return response
    return response;
  } catch (err) {
    throw err;
  }
};
