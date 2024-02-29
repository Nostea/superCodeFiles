import "./Faq.css";
import { useState } from "react";

const Faq = (props) => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <section className="faq">
      <div className="questionArea">
        <p>{props.question}</p>
        <button onClick={() => setOpenItem((openItem) => !openItem)}>{openItem ? "+" : "-"}</button>
      </div>
      <div className={openItem ? "show" : ""}>
        {" "}
        <hr />
        <p>{props.answer}</p>
      </div>
    </section>
  );
};

export default Faq;
