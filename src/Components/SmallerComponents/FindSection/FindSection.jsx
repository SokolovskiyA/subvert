import React from 'react'
import './FindSection.scss'
import logo from '../../../Assets/Images/logo.png'

function FindSection() {
    return (
        <div className='contact'>
            <img className='contact__logo' src={logo} alt='logo' />
            <div className='contact__info'>
                <h2 className='contact__header'>Find Us Here</h2>
                <div className="contact__logo-container">
                    <a href="https://podcasts.apple.com/ca/podcast/the-subvert/id1599961653" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODg5ODQyLnJzcw==" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://overcast.fm/itunes1599961653" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://podcastaddict.com/podcast/3712800" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://castbox.fm/vic/1599961653?ref=buzzsprout" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://www.deezer.com/show/3217002" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://player.fm/series/series-3141042" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://web.podfriend.com/podcast/1599961653" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://open.spotify.com/show/1kWPmcGPOjwf3uWnstqBsP" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://podcastindex.org/podcast/4491021" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://music.amazon.com/podcasts/626af705-c746-4a5e-94db-089799a95565" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://castro.fm/itunes/1599961653" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://pca.st/vq73fmea" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://www.listennotes.com/c/908cee0289a4485cb0c312dbb772e9c9/" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://www.goodpods.com/podcasts-aid/1599961653" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                    <a href="https://feeds.buzzsprout.com/1889842.rss" className="contact__link"><img src={logo} alt="logo-link" className="contact__link-logo"/></a>
                </div> 
            </div>
        </div>
    )
}

export default FindSection