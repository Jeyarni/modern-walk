import "./App.css";
import Home from "./pages/Home";
import MenCloths from "./pages/MenCloths";
import WomenCloths from "./pages/WomenCloths";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeaderBar from "./components/MainHeaderBar";
import { ContentWrapper } from "./pages/styles";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeaderBar />
        <ContentWrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mens-clothing" element={<MenCloths />} />
            <Route path="/womens-clothing" element={<WomenCloths />} />
          </Routes>
        </ContentWrapper>
      </Router>
    </div>
  );
}

export default App;
