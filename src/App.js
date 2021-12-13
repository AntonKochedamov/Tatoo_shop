import {Route, Routes} from "react-router-dom";
import './reset.css';
import './fonts.css';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Page404 from "./components/Page404/Page404";



function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/catalog/*" element={<Catalog/> } />
          <Route path="/catalog/tatoomachine" element={<Catalog/> } />
          <Route path='/404' element={<Page404/>} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
