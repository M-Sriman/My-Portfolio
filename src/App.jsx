import React from 'react';
import Header from './components/Header';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Header />
      <Page1 />
      <Page4 /> 
      <Page3 />
      <Page2 />
      <Page5 />
    </div>
  );
};

export default App;
