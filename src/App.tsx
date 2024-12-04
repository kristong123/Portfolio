import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './index.css';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className='flex flex-row h-screen w-screen'>
      <Sidebar/>
      <main className='flex flex-col ml-sidebar-plus'>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
};

export default App;