'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PricingTables = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5 }, // Staggered appearance
    }),
  };

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after the component is in view
        }
      },
      { threshold: 0.3 } // Trigger when at least 10% of the component is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="pricing-tables" className="cq8p6 co2a3 cutri czjaw cnqgv" ref={ref}>
      <div className="cey85 c7l4p cn0dv c8bh4 cj65g c3j32 cgk3d c2ysc cfrwd" aria-hidden="true"></div>
      <div className="czd2q czjaw c92f3 cmhb9 c1plj">
        <div className="c1xxg cxbax">

          <div className="c5ymx calbx cmhb9 ccem0">
            <h2 className="cps50 crnbw cyb9k cdjn8">Start building for free, then add a plan to go live</h2>
            <p className="cn4vl czz36">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          <div className="clyfp cdxx5 crfqu c04nn cgv10 cn6x8 c3t8k cmhb9 cbv7r c74as">
            {/* Pricing tables with animations */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="cj3dx c54sb c6zr7 c1zcx cszwl cnc7y cdt9h"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                custom={i} // Custom index for delay
              >
                <div className="cyb9k c2h4q cdo31">
                  <div className="ctiy6 cxdxt ccipq cnc7y">
                    <div className="cps50 cu5hn czz36">{['Yearly', 'Monthly', 'Lifetime'][i]}</div>
                    {i === 0 && <div className="cidpy cv8tj ckzxk c5ccc cpz4m czak8 ca2ew cf4hw cqmyn c5mw1 cy8r3">-40%</div>}
                  </div>
                  <div className="cps50 cr2yz czak8 csrqa">
                    <span className="text-gray-600 c0atf cadh6">$</span>
                    <span className="cm36t">{[27, 47, 127][i]}</span>
                    <span className="c0atf cp09e cf4hw">{i === 2 ? '/one-time' : '/billed yearly'}</span>
                  </div>
                  <div className="c0atf cp09e">— Lorem ipsum dolor amet sit consect adipiscing.</div>
                </div>
                <div className="c67z9">
                  <a className={`text-white ${i === 0 ? 'bg-teal-500' : 'bg-purple-500'} cvy08 c9xc1 cs8sl`} href="#0">Go Premium</a>
                </div>
              </motion.div>
            ))}

            {/*-- Pricing features --*/}
            <div className="c86uj">
              <div className="ccmeu cdhnv cfrwd">
                <svg className="czak8 cfcmz cyws0 cbbvf" width="86" height="25" xmlns="http://www.w3.org/2000/svg">
                  <path className="text-gray-600 c4u31" d="M80.959 10.448l-5.502-8.292 1.666-1.105 8.596 12.953-15.534.62-.08-1.999 9.944-.397-7.182-3.672C45.251-3.737 21.787 1.633 2.216 24.726L.69 23.435C20.836-.338 45.252-5.926 73.73 6.752l7.23 3.696z"></path>
                </svg>
              </div>
              <div className="cps50 crnbw cu5hn csj9y cwrry cyb9k ckvro">All plans include:</div>
              <ul className="cn4vl c6xwf c2h4q">
                {['Unlimited domains', '24/7 support', 'One-click backups'].map((feature) => (
                  <li key={feature} className="cxdxt csrqa cnc7y">
                    <svg className="text-teal-500 c4u31 c2npy cfc20 c39kt cwc3u" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTables;
