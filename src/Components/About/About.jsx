import './About.css';
import { Jumbotron, Button } from 'reactstrap';

const About = () => {
  return (
    <div className="container-fluid">
      <Jumbotron className="Jumbotron">
        <div className="row">
          <div className="col-9">
            <h1>About</h1>
            <Button color="primary">Resume</Button>
          </div>
          <div className="col">
            <p>What should I put on this side?</p>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default About;
