/**
 * Returns true between 6 and 18 o clock.
 */
const isDayTime = () => {
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 17;
  return isDayTime;
};

export default isDayTime;
