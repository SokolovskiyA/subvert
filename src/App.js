import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import MerchPage from './Components/MerchPage/MerchPage';
import VideoPage from './Components/VideoPage/VideoPage';
import StartPage from './Components/StartPage/StartPage';
import HomePage from './Components/HomePage/HomePage';
import AudioPage from './Components/AudioPage/AudioPage';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/videos' element={<VideoPage />}/>
          <Route path='/audio' element={<AudioPage />}/>
          <Route path='/store' element={<MerchPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
