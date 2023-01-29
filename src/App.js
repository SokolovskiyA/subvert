import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import StartPage from "./Pages/StartPage/StartPage";
import Home from './Pages/Home/Home'
import VideoPage from './Pages/VideoPage/VideoPage'
import AudioPage from './Pages/AudioPage/AudioPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import MerchendisePage from './Pages/MerchendisePage/MerchendisePage'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
