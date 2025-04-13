import React from 'react'

const Page5 = () => {
  return (
    <div className="h-screen p-8 md:p-16 bg-gradient-to-br from-white to-gray-200 flex items-center justify-center">
      <div className="h-full w-full bg-cyan-900 rounded-[60px] shadow-2xl px-8 md:px-20 py-12 text-white flex flex-col justify-center items-center space-y-12">

        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-50 tracking-wide drop-shadow-md">
          Contact Me
        </h1>

        <div className="text-center space-y-10 max-w-2xl text-lg md:text-xl">

          {/* Phone */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white/90">📞 Phone</h2>
            <a 
              href="tel:7780563030" 
              className="text-yellow-50 hover:text-yellow-100 transition duration-200 underline decoration-dotted"
            >
              +91 77805 63030
            </a>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white/90">📧 Email</h2>
            <a 
              href="mailto:srimanyuketh2555@gmail.com" 
              className="text-yellow-50 hover:text-yellow-100 transition duration-200 underline decoration-dotted"
            >
              srimanyuketh2555@gmail.com
            </a>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white/90">📝 Let's Connect</h2>
            <p className="text-white/80 leading-relaxed">
              I’m always up for meaningful conversations — be it about technology, innovation,
              or new ideas. Feel free to reach out, and let’s build something great together.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page5
