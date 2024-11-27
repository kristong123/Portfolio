import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './index.css';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-row w-[90%]">
      <Sidebar />
      <main className="flex flex-col w-full ml-[22vh]">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;