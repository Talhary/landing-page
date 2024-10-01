'use client'

import React from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
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

  const statsData = [
    { value: '2.4M', description: 'Days turn around' },
    { value: '7M', description: 'Days turn around' },
    { value: '7.4%', description: 'Days turn around' },
    { value: '49K', description: 'Days turn around' },
  ]

  return (
    <section id="stats" ref={ref}>
      {/* Background gradient (light version only) */}
      <div className="cey85 clgvu chf91 cdy81 cgk3d c35ck chb9f c2s69 cp8ye c02j9 c4shy" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="czd2q czjaw c92f3 cmhb9 c1plj">
        <div className="cdoe6 ccem0">
          <motion.div
            className="cufz0 cv9a4 c5ymx cy220 c5v0a c74as"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="cj3dx ch76r c6zr7 cwpmf co95y"
                variants={itemVariants}
              >
                <div className="cps50 ckyqm c21u3 cnolr ccipq">{stat.value}</div>
                <div className="text-gray-600 c0atf">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Stats