const getPMorAM = (y, m, d, t) => {
  const userDay = new Date(y, m, d, t);
  if (t <= 12) {
    console.log("AM");
  } else {
    console.log("PM");
  }
};

//getPMorAM(1999, 10, 5, 15);   //PM
getPMorAM(2024, 11, 5, 13); //PM
//getPMorAM(2019, 12, 3, 12);   //AM
getPMorAM(2000, 1, 1, 11); //AM
