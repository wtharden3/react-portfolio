import './About.css';
import { Jumbotron, Button } from 'reactstrap';

const About = () => {
  return (
    <div className="container-fluid">
      <Jumbotron className="Jumbotron">
        <div className="row">
          <div className="col-9">
            <h1>About</h1>
            <p>I've been a resident of Indianapolis for 9 years. </p>

            <p>
              Web Development started as a hobby as I steadily kept picking up
              front end development skills. After a while, I realize that the
              interest kept growing and I eventually started my first role as a
              web developer a Finance of America. Later I started working for
              Fusion Alliance where I was a UX developer and consultant for a
              year and a half.{' '}
            </p>

            <p>
              2020 has been a rough for probably all of us. I found myself
              unemployed after being laid off due to Covid-19. I decided that I
              would take the time to learn new skills so I enrolled in Eleven
              Fifty Academy. I completed the UX/UI Design course and I an
              currently enrolled in the Full Time Web Development course. This
              has allowed me to stay current, brush up on some of my JavaScript
              skills and pick up some new skills such as React, Sequelize, and
              PostgresSQL.
            </p>

            <p>
              I will have completed the 3-month immersive project-based web
              development bootcamp in January 15, 2021 and hope to find an
              opportunity to work as a JavaScript or React Developer. I also
              enjoy working with Node.js and am interested in d3.js and data
              visualization.
            </p>
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
