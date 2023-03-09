import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Back from "./components/back";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Nav from "./components/nav";

function App() {
  const [contactData, setContactData] = useState();
  useEffect(()=>{
    axios.get('http://localhost:8080/contactdata').then((result) => {
      setContactData(result.data);
    })
    .catch(() => {
      console.log('데이터 로딩에 실패했습니다.')
    })
  },[]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Nav/><Banner/></>}/>
        <Route path="/contact" element={<><Nav/><Contact/><Back/></>}/>
        <Route path="/admin" element={<><Admin contactData={contactData}/></>}/>
      </Routes>
    </div>
  );
}

export default App;
