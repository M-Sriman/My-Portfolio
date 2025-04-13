import React from 'react'
import Tilttext from '../components/Tilttext'
import Page1botton from '../components/Page1botton'
import logo from '../components/images/logo.png'
import myimage1 from '../components/images/myimage1.png';

const Page1 = () => {
  const mouseMoving=(e) =>{
    console.log(e.clientX,e.clientY);
  }
  
  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-screen px-3.5 py-3.5 bg-yellow-50'>
        <div className="shadow-xl shadow-gray-700 h-full w-full rounded-[30px] p-7 bg-cover bg-center bg-cyan-900" style={{ backgroundImage: `url(${myimage1})` }}>
          <img className='h-20 ml-16 rounded-xl' src={logo}/>
          <Tilttext />
          <Page1botton />
        </div>
        
      
    </div>
  )
}

export default Page1
