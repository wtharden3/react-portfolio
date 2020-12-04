import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import './Home.css';
import Experience from '../Experience/Experience';
import MyWork from '../MyWork/MyWork';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <About />
      <Education />
      <Experience />
      <Skills />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Home;
