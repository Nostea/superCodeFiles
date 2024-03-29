const weekendChecker = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();

  return day === 0 || day === 6 ? "Weekend" : "Arbeitstag";
};

console.log(weekendChecker("12.15.2019"));
console.log(weekendChecker("2.16.2001"));
console.log(weekendChecker("2.1.2020"));
console.log(weekendChecker("2.29.2020"));
