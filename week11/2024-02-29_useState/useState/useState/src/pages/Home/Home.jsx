import "./Home.css";
import Counter from "../../components/Counter/Counter";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <h1>Home</h1>
        <Counter />
      </section>
      <Form />
    </>
  );
};

export default Home;
