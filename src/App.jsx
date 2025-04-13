import React from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'

const App = () => {
  return (
    <>
      <Header />
      <Page1 />
      <Page4 />
      <Page2 />
      <Page3 />

      {/* Adding a unique ID here(just for understanding) */}
      <div id="contact">
        <Page5 />
      </div>
    </>
  )
}

export default App
