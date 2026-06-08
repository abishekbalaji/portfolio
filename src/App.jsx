import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Expertise from './components/Expertise'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Featured from './components/Featured'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Expertise />
        <Portfolio />
        <Experience />
        <Awards />
        <Featured />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
