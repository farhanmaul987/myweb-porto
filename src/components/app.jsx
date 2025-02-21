import Navbar from "./navbar/navbar.jsx";
import Hero from "./hero/hero.jsx";
import AboutMe from "./aboutMe/aboutMe.jsx";
import Project from "./project/project.jsx";
import HireMe from "./hireMe/hireMe.jsx";
import ToolsAndSkills from "./toolsAndSkills/toolsAndSkills.jsx";
import ContactPerson from "./contactPerson/contactPerson.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <HireMe />
      <ToolsAndSkills />
      <ContactPerson />
    </div>
  );
}

export default App;
