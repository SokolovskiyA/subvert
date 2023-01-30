import './VideoPlayer.scss';
import axios from 'axios';
import { useEffect } from 'react';

function VideoPlayer(props) {
    useEffect (
        axios.get()
    )
    const apiKey = "AIzaSyBVcSAwLvCe1XAK4CRWA3F8QP2i6RXu1Ho"
    return (  
        <section className="video"> 
            <video className='video__player' controls poster={props.image} src={`${props?.video}?api_key=test`}>
            </video>
        </section>
    )
}

export default VideoPlayer