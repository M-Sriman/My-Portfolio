import React from 'react'


const Header = () => {
  const handleHireClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='fixed w-full flex items-center justify-end z-10 py-20 px-20'>
      <button
        onClick={handleHireClick}
        className='bg-yellow-50 text-cyan-900 border-4 text-xl font-bold font-sans px-8 py-2 rounded-full hover:bg-cyan-50 transition'
      >
        Hire me
      </button>
    </div>
  )
}

export default Header
