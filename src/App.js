import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import  Work  from './components/work/Work';
import  Resume  from './components/Resume/Resume';
import  Skills  from './components/Skills/Skills';
import { useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const workRef = useRef(null);
  const resumeRef = useRef(null);
  const skillRef = useRef(null);

  const handleScrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleScrollToResume = () => {
      resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleScrollToSkill = () => {
      skillRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <HelmetProvider>
      <div>
        <Home 
          handleScrollToWork={handleScrollToWork}
          handleScrollToResume={handleScrollToResume}
          handleScrollToSkill={handleScrollToSkill}
        />
        <Work ref={workRef}/>
        <Resume ref={resumeRef}/>
        <Skills ref={skillRef}/>
      </div>
    </HelmetProvider>
  );
}

export default App;
