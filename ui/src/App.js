import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SearchPage from './components/SearchPage';
import MyProperty from './components/MyProperty';

function App() {

  return(
   
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Routes>
          <Route path="/myproperty" element={<MyProperty />} />
        </Routes>

      </div>
    </BrowserRouter>
  )

}

export default App;
