import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import StartPage from "./Pages/StartPage/StartPage";
import Home from './Pages/Home/Home'
import VideoPage from './Pages/VideoPage/VideoPage'
import AudioPage from './Pages/AudioPage/AudioPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import MerchendisePage from './Pages/MerchendisePage/MerchendisePage'
import Button from './Components/Button/Button';
import Logo from './Components/Logo/Logo';
import { useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  let [menuOpen, setMenuOpen] = useState(true)
  const openMenu = (e) => {
    setMenuOpen(false)
  }
  const closeMenu = (e) => {
    setMenuOpen(true)
  }

  return (
    <div className="App">
      <BrowserRouter>
        {menuOpen === false && <Header close={closeMenu}/>}
        <Button text="MENU" class="nav" click={openMenu}/>
        <Logo />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/video' element={<VideoPage />}/>
          <Route path='/audio' element={<AudioPage />}/>
          <Route path='/merchendise' element={<MerchendisePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contacts' element={<ContactPage />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
