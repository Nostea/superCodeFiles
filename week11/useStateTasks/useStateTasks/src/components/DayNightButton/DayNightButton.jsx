import "./DayNightButton.css";
import { useState } from "react";

const DayNightButton = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <section className={darkmode ? "dark" : ""}>
      <h1>{darkmode ? "Night" : "Day"}</h1>
      <button type="button" onClick={() => setDarkmode((darkmode) => !darkmode)}>
        {darkmode ? "Light Mode" : "Dark Mode"}
      </button>
    </section>
  );
};

export default DayNightButton;
