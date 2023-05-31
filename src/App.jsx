import './App.css';

import { Navbar } from './Navbar';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Projects } from './pages/Projects/Projects';
import { CV } from './pages/CV/cv';
import { Contacts } from './pages/Contacts/Contacts';


function App() {

  return (
    <>
      <Navbar />
      <Home />   
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contacts />
    </>
  )
}

export default App;
