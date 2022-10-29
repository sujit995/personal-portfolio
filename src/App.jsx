import './App.css'
import About from './components/About'
import Bot from './components/Bot'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hireme from './components/Hireme'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'
import SocialLinks from './components/Sociallinks'

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  )
}

export default App
