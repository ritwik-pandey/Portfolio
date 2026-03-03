import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Dock from '#components/Dock'
import Home from "#components/Home";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  )
}

export default App;