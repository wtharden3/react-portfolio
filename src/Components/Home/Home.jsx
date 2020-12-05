import Box from '@material-ui/core/Box';
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
      <Box py={5}>
        <h1 className="leadHeader">
          <span>Hello, </span>
          <span>I'm </span>
          <br />
          <span className="emphasizedHeading">Whitney Harden</span>
          <hr />
          <span>I'm a </span>
          <br />
          <span className="emphasizedHeading">Full Stack Web Developer</span>
        </h1>
      </Box>
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
