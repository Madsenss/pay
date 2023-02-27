import { Route, Routes } from "react-router-dom";
import Back from "./components/back";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Nav/><Banner/></>}/>
        <Route path="/contact" element={<><Contact/><Back/></>}/>
        <Route path="/admin" element={<>admin</>}/>
      </Routes>
    </div>
  );
}

export default App;
