let list = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function monatsName(datumInput) {
  const currentDate = new Date(datumInput);
  const monatNum = currentDate.getMonth();
  return list[monatNum];
}

console.log(monatsName("2001-3-4")); //März
console.log(monatsName("2019-12-24")); //Dezember
console.log(monatsName("1410-07-15")); //Juli
