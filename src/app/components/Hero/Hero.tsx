'use client'

import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="hero" ref={ref}>
      <motion.div
        className="czd2q c92f3 cmhb9 c1plj"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="c1r3i c8lmj cew09 c09hn">
          <div className="ckv2s cxdxt co6hs c8zhu chdqp">
            <motion.div className="cpo9b c2igy c7z56 c5ymx c4u1v cy5hl pb-10" variants={containerVariants}>
              <motion.h1 className="cps50 cbhe1 c21u3 cyb9k c41dw" variants={itemVariants}>
                Your website, reimagined
              </motion.h1>
              <motion.p className="text-gray-600 c0atf czz36" variants={itemVariants}>
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
              </motion.p>
              
              <motion.form className="c2bi2" variants={itemVariants}>
                <div className="cw3my cd663 cks70 c2k38 c54sb c5a8a cmhb9 cnc7y">
                  <input type="tel" className="c3mdo cltj3 cog1o cs8sl csrqa" placeholder="Phone number" aria-label="Phone number" />
                  <a className="text-white bg-teal-500 cvy08 c2npy ctr9b" href="#0">Request code</a>
                </div>
              </motion.form>

              <motion.ul className="text-gray-600 c0atf csd7z cd663 c2k38 cmhb9 c6xwf c2bi2" variants={containerVariants}>
                {['Lorem ipsum is placeholder text commonly.', 'Excepteur sint occaecat cupidatat.', 'Lorem ipsum is placeholder text commonly.'].map((text, index) => (
                  <motion.li key={index} className="cxdxt csrqa cnc7y" variants={itemVariants}>
                    <svg className="text-teal-400 c4u31 c2npy cui34 c39kt cwc3u" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="cw9gd c8udt cob0z c5ymx"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="cw3my cxdxt czak8 czjaw">
                <svg className="cey85 cimtg cgk3d cy5gd cdwzm codcr" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4"></circle>
                  <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6"></circle>
                  <defs>
                    <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                      <stop stopColor="#667EEA"></stop>
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01"></stop>
                    </radialGradient>
                    <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                      <stop stopColor="#9F7AEA"></stop>
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01"></stop>
                    </radialGradient>
                  </defs>
                </svg>
                <img className="cgk3d" src="https://preview.cruip.com/appy/images/mockup-image-01.jpg" width="290" height="624" alt="Features illustration" />
                <img className="cey85 csd7z cvjv9 czjaw cas9o cmhb9 cb1y1" src="https://preview.cruip.com/appy/images/iphone-mockup.png" width="344" height="674" alt="iPhone mockup" />
                <a className="cmemh clq5w ccb29 ceo83 cgk3d" href="#0" aria-controls="modal">
                  <img src="https://preview.cruip.com/appy/images/play-button.svg" width="96" height="96" alt="Play" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero