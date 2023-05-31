import './App.css';

import { Navbar } from './Navbar';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  )
}

export default App;
