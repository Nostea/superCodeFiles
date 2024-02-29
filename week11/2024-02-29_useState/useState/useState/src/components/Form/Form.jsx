import "./Form.css";

const Form = () => {
  return (
    <section>
      <h2>form</h2>
      <form action="">
        <input type="text" name="firstname" id="firstname" placeholder="first name" />

        <input type="text" name="lastname" id="lastname" placeholder="last name" />
      </form>
    </section>
  );
};

export default Form;
