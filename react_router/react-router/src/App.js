import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav";
import Main from "./Main";
import About from "./About";
import Blog from "./Blog";
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Nav/>
       <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="About" element={<About/>}></Route>
          <Route path="Blog" element={<Blog/>}> </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
