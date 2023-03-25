import React from 'react'
import './AboutSection.scss'
import Button from '../Button/Button'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FramedPuppet from '../FramedPuppet/FramedPuppet';


function AboutSection() {
    const [ about, setAbout] = useState(false);
    console.log(about)
    //write event function
    const sectionOpener = (e) => {
        e.preventDefault();
        setAbout(!about);
    }
    return (
        <section id="about" className='about'>
            <div className='about__initial'>
                <motion.h2 className='about__head'>About Us</motion.h2>
                <motion.h3 className='about__text'>Welcome to the Land of No Easy Answers. We seek to unravel the mysteries of the mind, the vagaries of the universe, and all the connections between. From learning to friend again in the post-pandemic, to combining neuroscience with sock puppets, The Subvert Podcast is here to help explain the chaos, with more chaos. Join hosts Kristin Rumohr and Aaron Stewart as we attempt to unravel the mysteries of the mind and your universe, subverting the disconnect between perceived realities.</motion.h3>
            </div>
            <FramedPuppet openBull={about} />
            <AnimatePresence>
                {about ? <motion.div initial={{height: 0, opacity: 0}} animate={{height: about && "auto", opacity: about && 1}} transition={{duration: 1}} exit={{height: 0, opacity: 0}} className='about__more'>
                            <div className='about__host'>
                                <h3>Kristin Rumohr</h3>
                                <p>Kristin is a holistic counselling psychologist and reiki master. She’s passionate about helping people celebrate their uniqueness, and express their thoughts freely without fear of judgement. She embraces the fun, the weird, the intelligent, the outrageous, the sensible, and everything in between. We are only given a limited amount of time and energy exist on this planet, Kristin asks the question how will you choose to manage it?</p>
                            </div>
                            <div className='about__host'>
                                <h3>Aaron Stewart</h3>
                                <p>Aaron has always sought out a stage to perform on, continually expanding his musical, theatrical and word vocabulary. And now, in an attempt to use those words up, he Co-Hosts the Subvert Podcast. Almost never right, but always thoughtful, with a gift for empathy bordering on the fringes of being inside your head, Aaron considers people his greatest challenge, and most wonderful puzzle to unlock. Join him every week as we attempt to decipher the oddities that exist in all our minds, seeking to make our brains more fluid, to attempt to achieve the Ultimate Mind State, FluedBraen. </p>
                            </div>
                        </motion.div> : null}
            </AnimatePresence>
            {about ? <Button click={sectionOpener} classN="about__button" text="close"/> : <Button click={sectionOpener} classN="about__button" text="read more"/>}
        </section>
        
    )
}

export default AboutSection