import Homescreen from "./screens/homescreen/homescreen";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Acceleronspage from "./screens/acceleronspage/acceleronspage";
import Nitroxpage from "./screens/nitroxpage/nitroxpage";
import Autokritipage from "./screens/autokritipage/autokritipage";
import Registrationform from "./screens/registrationform/registrationform";
import Tac from "./screens/terms and conditions/tac";
import Privacypolicy from "./screens/privacypolicy/privacypolicy";
import Contactus from "./screens/contactus/contactus";
import { useEffect } from "react";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/accelerons" element={<Acceleronspage />} />
        <Route path="/nitrox" element={<Nitroxpage />} />
        <Route path="/autokriti" element={<Autokritipage />} />
        <Route path="/autokriti/register" element={<Registrationform />} />
        <Route path="/termsandconditions" element={<Tac />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
