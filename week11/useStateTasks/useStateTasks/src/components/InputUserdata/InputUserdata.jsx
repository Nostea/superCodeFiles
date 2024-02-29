import { useState } from "react";
import "./InputUserdata.css";

const InputUserdata = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section className="userdata-form">
      <form action="">
        <input type="text" name="firstname" id="firstname" placeholder="Vorname" onChange={(event) => setFirstname(event.target.value)} />
        <input type="text" name="lastname" id="lastname" placeholder="Nachnahme" onChange={(event) => setLastname(event.target.value)} />
        <input type="email" name="email" id="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
      </form>

      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>Email: {email}</p>
    </section>
  );
};

export default InputUserdata;
