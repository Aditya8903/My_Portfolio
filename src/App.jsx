import appStyle from  './App.module.css';
import About  from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skiils';

function App() {
  return (
    <div className={appStyle.App}>
      <Navbar/>   
      <Hero/>   
      <About/>
      <Skills/>
      <Project/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
