import React from 'react'
import './AboutSection.scss'

function AboutSection() {
    return (
        <section id="about" className='about'>
            <h2 className='about__head'>About Us</h2>
            <h3 className='about__text'>Welcome to the Land of No Easy Answers. We seek to unravel the mysteries of the mind, the vagaries of the universe, and all the connections between. From learning to friend again in the post-pandemic, to combining neuroscience with sock puppets, The Subvert Podcast is here to help explain the chaos, with more chaos. Join hosts Kristin Rumohr and Aaron Stewart as we attempt to unravel the mysteries of the mind and your universe, subverting the disconnect between perceived realities.</h3>
            <div className='about___host1'>
                <h3><img alt="avatar"/>Aaron Stewart</h3>
                <p>Aaron has always sought out a stage to perform on, continually expanding his musical, theatrical and word vocabulary. And now, in an attempt to use those words up, he Co-Hosts the Subvert Podcast. Almost never right, but always thoughtful, with a gift for empathy bordering on the fringes of being inside your head, Aaron considers people his greatest challenge, and most wonderful puzzle to unlock. Join him every week as we attempt to decipher the oddities that exist in all our minds, seeking to make our brains more fluid, to attempt to achieve the Ultimate Mind State, FluedBraen. </p>
            </div>
            <div className='about___host2'>
                <h3><img alt="avatar"/>Kristin Rumohr</h3>
                <p>Kristin is a holistic counselling psychologist and reiki master. She’s passionate about helping people celebrate their uniqueness, and express their thoughts freely without fear of judgement. She embraces the fun, the weird, the intelligent, the outrageous, the sensible, and everything in between. We are only given a limited amount of time and energy exist on this planet, Kristin asks the question how will you choose to manage it?</p>
            </div>
        </section>
        
    )
}

export default AboutSection