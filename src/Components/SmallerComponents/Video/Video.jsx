
import './Video.scss';

function Video({video}) {
    const description = video.snippet.description.split('Welcome to the land of no easy answers')
    return (
        <section className="video"> 
            <h1>{video.snippet.title}</h1>
            <iframe 
                className='video__player' 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <p>{description[0]}</p>
        </section>
    )
}

export default Video;