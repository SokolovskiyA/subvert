import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';



import MerchPage from './Components/MerchPage/MerchPage';
import VideoPage from './Components/VideoPage/VideoPage';
import StartPage from './Components/StartPage/StartPage';
import HomePage from './Components/HomePage/HomePage';
import AudioPage from './Components/AudioPage/AudioPage';


function App() {
  const [ videos, setVideos] = useState([])
  const apiKey="AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs"
  
  const fetchVideos = () => {
      axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=${apiKey}`)
      .then(response => {
          const sorted = response.data.items
          sorted.sort((a,b)=> Date.parse(b.snippet.publishedAt) -  Date.parse(a.snippet.publishedAt))
          setVideos(sorted)
          })
      .catch(error => console.log(error))
  }
  useEffect(() => { 
      fetchVideos()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}/>
          <Route path='/home' element={<HomePage videos={videos} />}/>
          <Route path='/video' element={<VideoPage />}/>
          <Route path='/audio' element={<AudioPage />}/>
          <Route path='/merchendise' element={<MerchPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
