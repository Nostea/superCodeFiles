function getParcelSize() {
  let listItem = Number(document.querySelector("#mylist").value);
  let showtxtOutput = document.querySelector("#masse");

  console.log("wert vor ausführung der function: " + listItem);
  console.log("output vor function: " + showtxtOutput);

  switch (listItem) {
    case 0:
      showtxtOutput.innerHTML = `<b>Brief und Postkarte</b> <br>
      
    L: 10 - 23,5 cm
    B: 7 - 12,5 cm
    H: bis 1 cm`;
      console.log("case0 listItem:  " + listItem);

      break;

    case 1:
      showtxtOutput.innerHTML = `<b>DHL Paket 2 kg</b> <br>
    bis 60 x 30 x 15 cm`;
      console.log(listItem);
      break;

    case 2:
      showtxtOutput.innerHTML = `<b>DHL Paket 5 kg</b> <br>
  bis 120 x 60 x 60 cm`;
      console.log(listItem);
      break;

    case 3:
      showtxtOutput.innerHTML = `<b>DHL Paket 10 kg</b> <br>
  bis 120 x 60 x 60 cm`;
      console.log(listItem);

      break;

    default:
      showtxtOutput.innerHTML = `<b>Extra große Größe</b>`;
      console.log(listItem);
      console.log("Extra große Größe");
  }
}
