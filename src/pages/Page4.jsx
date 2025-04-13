import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page4 = () => {
  const sectionRef = useRef(null)
  const webRef = useRef(null)
  const dsaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(webRef.current, {
        scrollTrigger: {
          trigger: webRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })

      gsap.from(dsaRef.current, {
        scrollTrigger: {
          trigger: dsaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className='min-h-screen mt-5 px-6 py-10 bg-yellow-50 overflow-x-hidden'>
      <div className='w-full bg-cyan-900 rounded-[60px] p-10 text-white flex flex-col justify-center items-center space-y-10'>

        <h1 className='text-4xl font-bold text-center mb-4'>Skills</h1>

        {/* Web Development Section */}
        <div
          ref={webRef}
          className='bg-cyan-800 w-full md:w-4/5 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300'
        >
          <h2 className='text-2xl font-semibold mb-4'>🌐 Web Development</h2>
          <p className='text-lg leading-relaxed'>
            I build fast, responsive, and dynamic websites using React.js, Tailwind CSS, Node.js, and Supabase. My focus is on clean design, smooth UX, and scalable architecture using modern frontend tools and frameworks.
          </p>
        </div>

        {/* DSA Section */}
        <div
          ref={dsaRef}
          className='bg-cyan-800 w-full md:w-4/5 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300'
        >
          <h2 className='text-2xl font-semibold mb-4'>💻 DSA in C++</h2>
          <p className='text-lg leading-relaxed'>
            With a strong base in C++, I’ve tackled 300+ DSA problems on platforms like LeetCode. I love optimizing algorithms and diving deep into core topics like graphs, trees, recursion, and dynamic programming.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page4
