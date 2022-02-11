import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Employers } from "./pages/Employers/Employers";
import { Freelancers } from "./pages/Freelancers/Freelancers";
import { FormFreelancer } from "./pages/FormFreelancer/FormFreelancer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employers" element={<Employers />} />
        <Route path="/Freelancers" element={<Freelancers />} />
        <Route path="/FormFreelancer" element={<FormFreelancer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
