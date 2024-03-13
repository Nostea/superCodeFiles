import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery";
import OpeningHours from "./pages/OpeningHours";
import Contact from "./pages/contact";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* So muss ich Header nicht in jede seite einzel importieren */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/openinghours" element={<OpeningHours />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
