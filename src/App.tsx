import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import API from './components/API';
import NodeAPI from './components/NodeAPI';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <main>
        <About />
        <Experience />
        <Projects />
        <API />
        <NodeAPI />
      </main>
    </div>
  );
};

export default App;