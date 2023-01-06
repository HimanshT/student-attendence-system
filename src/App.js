import Allstudents from './components/Allstudents';
import Mainpage from './components/Mainpage';
import Studentform from './components/Studentform';
import Searchbar from './components/Searchbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='addstudent' element={<Studentform />}></Route>
          <Route path='students' element={<Allstudents />}></Route>
          <Route path='searchbar' element={<Searchbar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
