const singers = [
  { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  { name: "Elvis Presley", country: "United States", period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
  { name: "Michael Jackson", country: "United States", period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
  { name: "Elton John", country: "United Kingdom", period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
  { name: "Madonna", country: "United States", period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
  { name: "Led Zeppelin", country: "United Kingdom", period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
  { name: "Rihanna", country: "United States", period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
  { name: "Pink Floyd", country: "United Kingdom", period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

const output = document.querySelector("tbody");
const allSingers = () => {
  output.innerHTML = "";
  singers.forEach((singer) => {
    output.innerHTML += `<tr>
    <td>${singer.name}</td><td>${singer.country}</td><td>${singer.period_active.start}-${singer.period_active.end}</td><td>${singer.genre}</td>
    </tr>`;
  });
};

allSingers();

searchInput.addEventListener("keyup", () => {
  const searchTerm = searchInput.value.toLowerCase();
  // die Sucheingabe ist nicht case sensitive. das neue Array matchedSingers wird erstellt.
  // Der Inhalt ist das Array singers durchiteriert durch parameter(singer) und abgeglichen nach dem key: name.
  // alle einträge filter() , und .includes(Suchwort)
  const matchedSingers = singers.filter((singer) => singer.name.toLowerCase().includes(searchTerm));
  renderSingers(matchedSingers);
});

const renderSingers = (matchedSingers) => {
  output.innerHTML = "";

  if (matchedSingers.length > 0) {
    // hier wird die filterfunktion von oben matchedSingers verwendet
    //für jeden passenden Sucheintrag wird durch den Array matched Singers alle einträge nach template gerendert
    matchedSingers.forEach((singer) => {
      output.innerHTML += `<tr>
          <td>${singer.name}</td><td>${singer.country}</td><td>${singer.period_active.start}-${singer.period_active.end}</td><td>${singer.genre}</td>
        </tr>`;
    });
  } else {
    output.innerHTML = `<tr><td colspan="4">No bands found.</td></tr>`;
  }
};
