// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Get Date
export const dateNow = () => {
  const date = new Date().getFullYear();
  return `${date}`;
};

// Get Date and time
export const clock = () => {};

// Convert a number to money formatting
export const convertMoney = money => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};
