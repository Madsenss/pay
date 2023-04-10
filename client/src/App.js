import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Back from "./components/back";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Footer from "./components/footer";
import KakaoChat from "./components/kakaochat";
import Login from "./components/login";
import Nav from "./components/nav";
import Fail from "./components/fail";
import FailPath from "./components/failpath";
import GlobalStyle from "./components/globalstyle";
import { useEffect } from "react";

function App() {
  const setScreenSize = () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(()=>{
    setScreenSize();
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><GlobalStyle/><Nav/><Banner/><KakaoChat/><Footer/></>}/>
        <Route path="*" element={<><GlobalStyle/><FailPath/></>}/>
        <Route path="fail" element={<><GlobalStyle/><Fail/></>}/>
        <Route path="/contact" element={<><GlobalStyle/><Nav/><Contact/><Back/></>}/>
        <Route path="/login" element={<><GlobalStyle/><Login/></>}/>
        <Route path="/admin" element={<><GlobalStyle/><Admin/></>}/>
      </Routes>
    </div>
  );
}

export default App;
