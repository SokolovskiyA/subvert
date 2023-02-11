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
  let [menuOpen, setMenuOpen] = useState(false)
  
  const openMenu = (e) => {
    setMenuOpen(true)
    console.log(menuOpen)
  }
  const closeMenu = (e) => {
    setMenuOpen(false)
    console.log(menuOpen)
  }

  return (
    <div className="App">
      <Button click={openMenu} text="menu" class="nav"/>
      <Logo />
      <BrowserRouter>
        {menuOpen === true && <Header close={closeMenu}/>}
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
