export const convertSecondsToTime = (timeInSeconds) => {
  const pad = (num, size) => (`000${num}`).slice(size * -1);
  const time = parseFloat(timeInSeconds).toFixed(3);
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);
  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
};

export const convertSecondsToInt = (time) => parseInt(Math.ceil(time), 10);
