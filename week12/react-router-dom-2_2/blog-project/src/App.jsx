import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* So muss ich Header nicht in jede seite einzel importieren */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
