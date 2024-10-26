import './assets/App.css';
import Home from './pages/main.js';
import New from './pages/new.js';
import Journal from './pages/journal.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from './pages/nopage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='' element={<Home/>}/>
          <Route path='/New' element={<New/>}/>
          <Route path='/journal/:id' element={<Journal/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
