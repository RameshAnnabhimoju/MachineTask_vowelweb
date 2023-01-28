import { Routes, Route } from "react-router-dom";
import HomepageComponent from "./Components/HomepageComponent";
import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import VerificationComponent from "./Components/VerificationComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/verification" element={<VerificationComponent />} />
        <Route path="/home" element={<HomepageComponent />} />
      </Routes>
    </>
  );
}

export default App;
