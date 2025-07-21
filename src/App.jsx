import './App.css';
import Nav from './Components/Navbar/Nav';
import Landing from './Components/Landing/Landing';
import About from './Components/AboutMe/About';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import { Element } from 'react-scroll';
function App() {

  return (
    <div >
     <Element name="Nav">
       <Nav/>
      </Element>
      <Landing />
     <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="contact">
        <Footer />
      </Element>
    </div>
  )
}

export default App
