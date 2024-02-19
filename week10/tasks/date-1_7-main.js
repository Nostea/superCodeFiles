const weekendChecker = (y, m, d) => {
  const userDay = new Date(y, m, d);
  if (userDay.getDay() <= 5) {
    return console.log("Working");
  } else {
    return console.log("Weekend");
  }
};

weekendChecker(2019, 12, 15);
weekendChecker(2001, 2, 16);
weekendChecker(2020, 2, 1);
weekendChecker(2001, 2, 29);
