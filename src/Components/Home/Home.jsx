import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import MyWork from '../MyWork/MyWork';
import Skills from '../Skills/Skills';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron>
        Home
        <Button color="primary">Resume</Button>
      </Jumbotron>
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
