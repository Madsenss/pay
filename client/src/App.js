import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Back from "./components/back";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Footer from "./components/footer";
import KakaoChat from "./components/kakaochat";
import Login from "./components/login";
import Nav from "./components/nav";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Nav/><Banner/><KakaoChat/><Footer/></>}/>
        <Route path="*" element={<>돌아가</>}/>
        <Route path="/contact" element={<><Nav/><Contact/><Back/></>}/>
        <Route path="/login" element={<><Login/></>}/>
        <Route path="/admin" element={<><Admin/></>}/>
      </Routes>
    </div>
  );
}

export default App;
