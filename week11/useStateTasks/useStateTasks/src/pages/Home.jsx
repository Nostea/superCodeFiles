import "./Home.css";
import Counter from "../components/Counter/Counter";
import DayNightButton from "../components/DayNightButton/DayNightButton";
import Faq from "../components/Faq/Faq";

const Home = () => {
  return (
    <div>
      <p>Hallo Home</p>
      <Counter />
      <DayNightButton />
      <Faq question="Was ist eine Katze" answer="Eine Katze ist ein süßes Tier" />
    </div>
  );
};

export default Home;
