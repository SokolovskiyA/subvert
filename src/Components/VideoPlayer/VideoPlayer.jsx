import './VideoPlayer.scss';


function VideoPlayer(props) {
    
    return (  
        <section className="video"> 
            <video className='video__player' controls poster={props.image} src={`${props?.video}?api_key=test`}>
            </video>
        </section>
    )
}

export default VideoPlayer