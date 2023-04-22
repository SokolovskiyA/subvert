/*import React from 'react'
import './FindSection.scss'
import logo from '../../../Assets/Images/Sub.svg'
import apple from '../../../Assets/logos/apple.svg'
import google from '../../../Assets/logos/google.svg'
import overcast from '../../../Assets/logos/overcast.svg'
import podcastAddict from '../../../Assets/logos/podcastAddict.png'
import castbox from '../../../Assets/logos/castbox.svg'
import deezer from '../../../Assets/logos/deezer.svg'
import playerfm from '../../../Assets/logos/playerfm.svg'
import podfriend from '../../../Assets/logos/podfriend.png'
import spotify from '../../../Assets/logos/spotify.svg'
import indexPod from '../../../Assets/logos/index.svg'
import amazon from '../../../Assets/logos/amazon.svg'
import castro from '../../../Assets/logos/castro.svg'
import pocketCast from '../../../Assets/logos/pocketCast.svg'
import listen from '../../../Assets/logos/listen.png'
import goodpods from '../../../Assets/logos/goodpods.jpg'
import rss from '../../../Assets/logos/rss.svg'
import buzz from '../../../Assets/logos/buzz.png'
import you from '../../../Assets/logos/you.svg'
import puppetNet from '../../../Assets/puppets/puppetNet.svg'
import Button from '../Button/Button'
import { useState } from 'react'

function FindSection() {
    const [ catchIcon, setCatchIcon ] = useState(false)
    
    const handleCatch = (e) => {
        e.preventDefault();
        setCatchIcon(!catchIcon)
    }

    return (
        <div className='contact' style={{ height: catchIcon ? "100%": "15vh"}}>
            <img className='contact__logo' src={logo} alt='logo' />
            <div className={catchIcon ? `contact__info2` : `contact__info`}>
                <img className="contact__puppet" src={puppetNet} alt="puppet with net"/>
                <h2 className='contact__header'>Find Us Here</h2>
                <a href="https://podcasts.apple.com/ca/podcast/the-subvert/id1599961653" className="contact__link link1">
                    <img src={apple} alt="logo-link" className="contact__link-logo logo1"/>
                </a>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODg5ODQyLnJzcw==" className="contact__link link2">
                    <img src={google} alt="logo-link y" className="contact__link-logo logo2"/>
                </a>
                <a href="https://overcast.fm/itunes1599961653" className="contact__link link3" >
                    <img src={overcast} alt="logo-link" className="contact__link-logo logo3"/>
                </a>
                <a href="https://podcastaddict.com/podcast/3712800" className="contact__link link4" >
                    <img src={podcastAddict} alt="logo-link" className="contact__link-logo logo4"/>
                </a>
                <a href="https://castbox.fm/vic/1599961653?ref=buzzsprout" className="contact__link link5" >
                    <img src={castbox} alt="logo-link" className="contact__link-logo logo5"/>
                </a>
                <a href="https://www.deezer.com/show/3217002" className="contact__link link6" >
                    <img src={deezer} alt="logo-link" className="contact__link-logo logo6"/>
                </a>
                <a href="https://player.fm/series/series-3141042" className="contact__link link7" >
                    <img src={playerfm} alt="logo-link" className="contact__link-logo logo7"/>
                </a>
                <a href="https://web.podfriend.com/podcast/1599961653" className="contact__link link8" >
                    <img src={podfriend} alt="logo-link" className="contact__link-logo logo8"/>
                </a>
                <a href="https://open.spotify.com/show/1kWPmcGPOjwf3uWnstqBsP" className="contact__link link9" >
                    <img src={spotify} alt="logo-link" className="contact__link-logo logo9"/>
                </a>
                <a  href="https://podcastindex.org/podcast/4491021" className="contact__link link10" >
                    <img src={indexPod} alt="logo-link" className="contact__link-logo logo10"/>
                </a>
                <a  href="https://music.amazon.com/podcasts/626af705-c746-4a5e-94db-089799a95565" className="contact__link link11" >
                    <img src={amazon} alt="logo-link" className="contact__link-logo logo11"/>
                </a>
                <a  href="https://castro.fm/itunes/1599961653" className="contact__link link12" >
                    <img src={castro} alt="logo-link" className="contact__link-logo logo12"/>
                </a>
                <a  href="https://pca.st/vq73fmea" className="contact__link link13" >
                    <img src={pocketCast} alt="logo-link" className="contact__link-logo logo13"/>
                </a>
                <a  href="https://www.listennotes.com/c/908cee0289a4485cb0c312dbb772e9c9/" className="contact__link link14" >
                    <img src={listen} alt="logo-link" className="contact__link-logo logo14"/>
                </a>
                <a  href="https://www.goodpods.com/podcasts-aid/1599961653" className="contact__link link15" >
                    <img src={goodpods} alt="logo-link" className="contact__link-logo logo15"/>
                </a>
                <a  href="https://feeds.buzzsprout.com/1889842.rss" className="contact__link link16" >
                    <img src={rss} alt="logo-link" className="contact__link-logo logo16"/>
                </a>
                <a  href="https://thesubvert.buzzsprout.com/" className="contact__link link17" >
                    <img src={buzz} alt="logo-link" className="contact__link-logo logo17"/>
                </a>
                <a  href="https://www.youtube.com/@thesubvertpodcast7733" className="contact__link link18" >
                    <img src={you} alt="logo-link" className="contact__link-logo logo18"/>
                </a>
            </div>
            <div className={catchIcon ? 'contact__info' : 'contact__info2'} style={{height: '100%', marginBottom: '2rem'}}>
                <h2 className='contact__header'>Find Us Here</h2>
                <a href="https://podcasts.apple.com/ca/podcast/the-subvert/id1599961653" className="">
                    <img src={apple} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODg5ODQyLnJzcw==" className="">
                    <img src={google} alt="logo-link " className="contact__link-logo"/>
                </a>
                <a href="https://overcast.fm/itunes1599961653" className="" >
                    <img src={overcast} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://podcastaddict.com/podcast/3712800" className="" >
                    <img src={podcastAddict} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://castbox.fm/vic/1599961653?ref=buzzsprout" className="" >
                    <img src={castbox} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://www.deezer.com/show/3217002" className="" >
                    <img src={deezer} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://player.fm/series/series-3141042" className="" >
                    <img src={playerfm} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://web.podfriend.com/podcast/1599961653" className="" >
                    <img src={podfriend} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a href="https://open.spotify.com/show/1kWPmcGPOjwf3uWnstqBsP" className="" >
                    <img src={spotify} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://podcastindex.org/podcast/4491021" className="" >
                    <img src={indexPod} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://music.amazon.com/podcasts/626af705-c746-4a5e-94db-089799a95565" className="" >
                    <img src={amazon} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://castro.fm/itunes/1599961653" className="" >
                    <img src={castro} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://pca.st/vq73fmea" className="" >
                    <img src={pocketCast} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://www.listennotes.com/c/908cee0289a4485cb0c312dbb772e9c9/" className="" >
                    <img src={listen} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://www.goodpods.com/podcasts-aid/1599961653" className="" >
                    <img src={goodpods} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://feeds.buzzsprout.com/1889842.rss" className="" >
                    <img src={rss} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://thesubvert.buzzsprout.com/" className="" >
                    <img src={buzz} alt="logo-link" className="contact__link-logo"/>
                </a>
                <a  href="https://www.youtube.com/@thesubvertpodcast7733" className="" >
                    <img src={you} alt="logo-link" className="contact__link-logo"/>
                </a>
            </div>
            <Button click={handleCatch} classN="contact__button" text="hard to catch?"/>
        </div>
    )
}

export default FindSection
*/

import React from 'react'
import './FindSection.scss'
import logo from '../../../Assets/Images/Sub.svg'
import apple from '../../../Assets/logos/apple.svg'
import google from '../../../Assets/logos/google.svg'
import overcast from '../../../Assets/logos/overcast.svg'
import podcastAddict from '../../../Assets/logos/podcastAddict.png'
import castbox from '../../../Assets/logos/castbox.svg'
import deezer from '../../../Assets/logos/deezer.svg'
import playerfm from '../../../Assets/logos/playerfm.svg'
import podfriend from '../../../Assets/logos/podfriend.png'
import spotify from '../../../Assets/logos/spotify.svg'
import indexPod from '../../../Assets/logos/index.svg'
import amazon from '../../../Assets/logos/amazon.svg'
import castro from '../../../Assets/logos/castro.svg'
import pocketCast from '../../../Assets/logos/pocketCast.svg'
import listen from '../../../Assets/logos/listen.png'
import goodpods from '../../../Assets/logos/goodpods.jpg'
import rss from '../../../Assets/logos/rss.svg'
import buzz from '../../../Assets/logos/buzz.png'
import you from '../../../Assets/logos/you.svg'
import pippetNet from '../../../Assets/puppets/puppetNet.svg'
import Button from '../Button/Button'
import { useState } from 'react'

function FindSection() {
    const [ catchIcon, setCatchIcon ] = useState(false)
    
    const handleCatch = (e) => {
        e.preventDefault();
        setCatchIcon(!catchIcon)
    }
    return (
        <div className='contact' style={{ height:`fit content`}}>
            <img className='contact__logo' src={logo} alt='logo' />
            <div className={catchIcon ? `contact__info2` : `contact__info`}>
                <img className="contact__puppet" src={pippetNet} alt="puppet with net"/>
                <h2 className='contact__header'>Find Us Here</h2>
                <a href="https://podcasts.apple.com/ca/podcast/the-subvert/id1599961653" className="contact__link link1"><img src={apple} alt="logo-link" className="contact__link-logo logo1"/></a>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODg5ODQyLnJzcw==" className="contact__link link2"><img src={google} alt="logo-link y" className="contact__link-logo logo2"/></a>
                <a href="https://overcast.fm/itunes1599961653" className="contact__link link3" ><img src={overcast} alt="logo-link" className="contact__link-logo logo3"/></a>
                <a href="https://podcastaddict.com/podcast/3712800" className="contact__link link4" ><img src={podcastAddict} alt="logo-link" className="contact__link-logo logo4"/></a>
                <a href="https://castbox.fm/vic/1599961653?ref=buzzsprout" className="contact__link link5" ><img src={castbox} alt="logo-link" className="contact__link-logo logo5"/></a>
                <a href="https://www.deezer.com/show/3217002" className="contact__link link6" ><img src={deezer} alt="logo-link" className="contact__link-logo logo6"/></a>
                <a href="https://player.fm/series/series-3141042" className="contact__link link7" ><img src={playerfm} alt="logo-link" className="contact__link-logo logo7"/></a>
                <a href="https://web.podfriend.com/podcast/1599961653" className="contact__link link8" ><img src={podfriend} alt="logo-link" className="contact__link-logo logo8"/></a>
                <a href="https://open.spotify.com/show/1kWPmcGPOjwf3uWnstqBsP" className="contact__link link9" ><img src={spotify} alt="logo-link" className="contact__link-logo logo9"/></a>
                <a  href="https://podcastindex.org/podcast/4491021" className="contact__link link10" ><img src={indexPod} alt="logo-link" className="contact__link-logo logo10"/></a>
                <a  href="https://music.amazon.com/podcasts/626af705-c746-4a5e-94db-089799a95565" className="contact__link link11" ><img src={amazon} alt="logo-link" className="contact__link-logo logo11"/></a>
                <a  href="https://castro.fm/itunes/1599961653" className="contact__link link12" ><img src={castro} alt="logo-link" className="contact__link-logo logo12"/></a>
                <a  href="https://pca.st/vq73fmea" className="contact__link link13" ><img src={pocketCast} alt="logo-link" className="contact__link-logo logo13"/></a>
                <a  href="https://www.listennotes.com/c/908cee0289a4485cb0c312dbb772e9c9/" className="contact__link link14" ><img src={listen} alt="logo-link" className="contact__link-logo logo14"/></a>
                <a  href="https://www.goodpods.com/podcasts-aid/1599961653" className="contact__link link15" ><img src={goodpods} alt="logo-link" className="contact__link-logo logo15"/></a>
                <a  href="https://feeds.buzzsprout.com/1889842.rss" className="contact__link link16" ><img src={rss} alt="logo-link" className="contact__link-logo logo16"/></a>
                <a  href="https://thesubvert.buzzsprout.com/" className="contact__link link17" ><img src={buzz} alt="logo-link" className="contact__link-logo logo17"/></a>
                <a  href="https://www.youtube.com/@thesubvertpodcast7733" className="contact__link link18" ><img src={you} alt="logo-link" className="contact__link-logo logo18"/></a>
            </div>
            <div className={catchIcon ? 'contact__info contact__2' : 'contact__info2'} style={{height: '100%', marginBottom: '2rem'}}>
                <h2 className='contact__header'>Find Us Here</h2>
                <div className='contact__logo-div'>
                    <a href="https://podcasts.apple.com/ca/podcast/the-subvert/id1599961653" className="">
                        <img src={apple} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODg5ODQyLnJzcw==" className="">
                        <img src={google} alt="logo-link " className="contact__link-logo"/>
                    </a>
                    <a href="https://overcast.fm/itunes1599961653" className="" >
                        <img src={overcast} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://podcastaddict.com/podcast/3712800" className="" >
                        <img src={podcastAddict} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://castbox.fm/vic/1599961653?ref=buzzsprout" className="" >
                        <img src={castbox} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://www.deezer.com/show/3217002" className="" >
                        <img src={deezer} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://player.fm/series/series-3141042" className="" >
                        <img src={playerfm} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://web.podfriend.com/podcast/1599961653" className="" >
                        <img src={podfriend} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a href="https://open.spotify.com/show/1kWPmcGPOjwf3uWnstqBsP" className="" >
                        <img src={spotify} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://podcastindex.org/podcast/4491021" className="" >
                        <img src={indexPod} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://music.amazon.com/podcasts/626af705-c746-4a5e-94db-089799a95565" className="" >
                        <img src={amazon} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://castro.fm/itunes/1599961653" className="" >
                        <img src={castro} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://pca.st/vq73fmea" className="" >
                        <img src={pocketCast} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://www.listennotes.com/c/908cee0289a4485cb0c312dbb772e9c9/" className="" >
                        <img src={listen} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://www.goodpods.com/podcasts-aid/1599961653" className="" >
                        <img src={goodpods} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://feeds.buzzsprout.com/1889842.rss" className="" >
                        <img src={rss} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://thesubvert.buzzsprout.com/" className="" >
                        <img src={buzz} alt="logo-link" className="contact__link-logo"/>
                    </a>
                    <a  href="https://www.youtube.com/@thesubvertpodcast7733" className="" >
                        <img src={you} alt="logo-link" className="contact__link-logo"/>
                    </a>
                </div>
            </div>
            <Button click={handleCatch} classN="contact__button" text="hard to catch?"/>
        </div>
    )
}

export default FindSection




