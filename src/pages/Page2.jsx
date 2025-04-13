import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import React from 'react'
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {

    useGSAP(function(){
      
        gsap.from(".rotateText",{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:1,
            stagger:1,
            scrollTrigger:{
              trigger:'.rotateText',
              //markers:true,
              start:"top 70%",
              end:"top -270%",
              scrub:2
            }
            
        })
    })






  return (
    <div id='section2' className='bg-yellow-50 text-center text-cyan-900 '>
      <h3 className='text-gray-500 text-xl font-[font3] bg-yellow-50 rounded-full'>©  Sriman.M | designed and developed</h3>
       <div className="rotateText">
        <h1 className='text-[42vw] mt-20 text-cyan-900 font-[font5] uppercase leading-[35vw]'>IMPACTFUL</h1>
       </div>
       <div className="rotateText">
        <h1 className='text-[42vw] text-cyan-900 font-[font5] uppercase leading-[35vw]'>Design </h1>
       </div>
       <div className="rotateText">
        <h1 className='text-[42vw] text-cyan-900 font-[font5] uppercase leading-[35vw]'>is the</h1>
       </div>
       <div className="rotateText">
        <h1 className='text-[42vw] text-cyan-900 font-[font5] uppercase leading-[35vw]'>Design</h1>
       </div>
       <div className="rotateText">
        <h1 className='text-[42vw] text-cyan-900 font-[font5] uppercase leading-[35vw]'>that</h1>
       </div>
       <div className="rotateText">
        <h1 className='text-[42vw] text-cyan-900 font-[font5] uppercase leading-[35vw]'>Works!</h1>
       </div>

       <div className='h-1 w-1/2 relative left-1/2 -translate-x-1/2 mt-10 bg-cyan-900'></div>
    
    
    </div>
  )
}

export default Page2
