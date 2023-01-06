import Allstudents from './components/Allstudents';
import Studentform from './components/Studentform';
import Searchbar from './components/Searchbar';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='addstudent' element={<Studentform />}></Route>
          <Route path='students' element={<Allstudents />}></Route>
          <Route path='searchbar' element={<Searchbar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
