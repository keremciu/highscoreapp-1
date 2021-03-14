export const getRandomInt = () => {
  return Math.floor(Math.random() * 200 - 100);
};

export const getAverage = (totalPoints: number, clicks: number) => {
  return Math.round(totalPoints / clicks);
};
