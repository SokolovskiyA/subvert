import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss'
import MerchPage from './Components/MerchPage/MerchPage';
import VideoPage from './Components/VideoPage/VideoPage';
import StartPage from './Components/StartPage/StartPage';
import HomePage from './Components/HomePage/HomePage';
import AudioPage from './Components/AudioPage/AudioPage';
import { CartProvider } from './Context/CartContext'
import Checkout from './Components/Checkout/Checkout';


function App() {
    const [ videos, setVideos] = useState([])
    const [ audio, setAudio] = useState([])
    const [ products, setProducts] =useState([])
    const fetchProducts = async () => {
        axios.get('http://localhost:5001/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const fetchAudio = async () => {
        axios.get('http://localhost:5001/audio') 
        .then(res => {
            const sorted = res.data
            sorted.sort((a,b)=> Date.parse(b.published_at) -  Date.parse(a.published_at))
            sorted.filter((item) => item.status === 'public')
            setAudio(sorted)
        })
        .catch(err => {
            console.log(err, 'there was error fetching audio')
        })
    }
    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs`);
            const sorted = response.data.items
            sorted.sort((a,b)=> Date.parse(b.snippet.publishedAt) -  Date.parse(a.snippet.publishedAt))
            setVideos(sorted)
        } catch (error) {
            console.log('there was an error fetchin video')
        }
    }
    useEffect(() => {       
        fetchVideos()
        fetchAudio()
        fetchProducts()
    }, [])

    if ( videos.length === 0 || audio.length === 0 || products.length === 0) 
    return (
        <div> 
            <p>Loading...</p>
        </div>
    )
    else return (
    <div className="App">
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<StartPage />}/>
                    <Route path='/home' element={<HomePage videos={videos} audio={audio} products={products}/>}/>
                    <Route path='/videos' element={<VideoPage videos={videos} />}/>
                    <Route path='/audio' element={<AudioPage audio={audio}/>}/>
                    <Route path='/store' element={<MerchPage products={products}/>}/>
                    <Route path='/store/checkout' element={<Checkout />}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </div>
    );
}


export default App;
