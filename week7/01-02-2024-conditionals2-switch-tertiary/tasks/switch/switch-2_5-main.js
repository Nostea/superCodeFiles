function check() {
  const result = document.querySelector("#bundeslandInfoErgebnis");
  let bundesland = document.querySelector("#bundeslandInfo").value;

  console.log(result);
  console.log(bundesland);

  switch (bundesland) {
    case (bundesland = "Baden-Württemberg"):
      result.innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;

    case (bundesland = "Bayern"):
      result.innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;

    case (bundesland = "Berlin"):
      result.innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;

    case (bundesland = "Brandenburg"):
      result.innerHTML =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;

    case (bundesland = "Bremen"):
      result.innerHTML =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;

    case (bundesland = "Hamburg"):
      result.innerHTML =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;

    case (bundesland = "Hessen"):
      result.innerHTML =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;

    case (bundesland = "Mecklenburg-Vorpommern"):
      result.innerHTML =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;

    case (bundesland = "Niedersachsen"):
      result.innerHTML =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;

    case (bundesland = "Nordrhein-Westfalen"):
      result.innerHTML =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;

    case (bundesland = "Rheinland-Pfalz"):
      result.innerHTML =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;

    case (bundesland = "Saarland"):
      result.innerHTML =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;

    case (bundesland = "Sachsen"):
      result.innerHTML =
        "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;

    case (bundesland = "Sachsen-Anhalt"):
      result.innerHTML =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;

    case (bundesland = "Schleswig-Holstein"):
      result.innerHTML =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;

    case (bundesland = "Thüringen"):
      result.innerHTML =
        "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;

    default:
      result.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht.";
  }
}
