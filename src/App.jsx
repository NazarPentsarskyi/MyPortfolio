import './App.css';

import { Navbar } from './Navbar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Cv } from './components/CV/Cv';
import { Contacts } from './components/Contacts/Contacts';
import { BackToUp } from './BackToUp';


function App() {

  return (
    <>
      <Navbar />
      <Home />   
      <About />
      <Skills />
      <Projects />
      <Cv />
      <Contacts />
      <BackToUp />
    </>
  )
}

export default App;
