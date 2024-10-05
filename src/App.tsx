import "./index.css";
import { Header } from "./components/Header.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage.tsx";
import { Chart } from "./pages/Chart.tsx";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/:id" element={<Chart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
