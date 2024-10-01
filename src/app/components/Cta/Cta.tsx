import React from 'react'
import { MessageCircleMore } from 'lucide-react'

const Cta = () => {
  return (
    <section id="cta" className="">
 

        <div className="czd2q c92f3 cmhb9 c1plj">

            {/*-- CTA box --*/}
            <div className="dark bg-gray-800 c7rl6 c5dtj czjaw cxbms cg1xa">

                {/*-- Background illustration --*/}
                <div className="cey85 c8fh2 cgk3d c2ysc" aria-hidden="true">
                    <svg className="c1zcx" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                                <stop stopColor="#667EEA" offset="0%"></stop>
                                <stop stopColor="#667EEA" stopOpacity="0" offset="100%"></stop>
                            </radialGradient>
                            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                                <stop stopColor="#3ABAB4" offset="0%"></stop>
                                <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%"></stop>
                            </radialGradient>
                        </defs>
                        <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                            <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240"></circle>
                            <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400"></circle>
                        </g>
                    </svg>
                </div>

                <div className="ctiy6 cxdxt cavyv czjaw c54sb cnc7y">

                    {/*-- CTA content --*/}
                    <div className="c346e c5ymx c9epb cescn crh83 cnxpd">
                        <h3 className="cps50 crnbw cm36t">Free until you're ready to launch</h3>
                    </div>

                    {/*-- CTA form --*/}
                    <form className="c9epb cs8sl">
                        <div className="cw3my c04nn cd663 cks70 c3t8k c54sb cmhb9 cnc7y">
                            <input type="tel" className="crnbw c3mdo cltj3 cog1o cs8sl csrqa" placeholder="Phone number" aria-label="Phone number" />
                            <a className="text-white bg-teal-500 cvy08 c2npy ctr9b" href="#0">Request code</a>
                        </div>
                        {/*-- Success message --*/}
                        {/*-- <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> --*/}
                    </form>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Cta
