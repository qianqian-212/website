import Nav from './components/Nav'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Lab from './components/Lab'
import Thinking from './components/Thinking'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100%', background: '#fff' }}>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Capabilities />
        <Lab />
        <Thinking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
