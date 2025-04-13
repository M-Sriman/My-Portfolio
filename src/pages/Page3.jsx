import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative bg-yellow-50 flex items-center justify-center'>
      <img className='absolute h-[80vh] z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
      <video autoPlay="true" loop muted  className='h-[60vh] z-10 w-[50vw] relative object-cover' src="/src/assets/file.mp4"></video>
    </div>
  )
}

export default Page3
