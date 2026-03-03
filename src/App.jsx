import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Dock from '#components/Dock'
import { Terminal, Safari, Resume, Finder, Text, Image, Contact } from "#windows";
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
      <Contact/>
    </main>
  )
}

export default App;