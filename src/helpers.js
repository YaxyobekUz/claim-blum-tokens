export const getRandomNumber = (min = 1, max = 10) => {
  if (max > min) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  } else return 1;
};

// format date
export const formatDate = (value) => {
  const date = new Date(value);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

// format time
export const formatTime = (time) => {
  const date = new Date(time);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
