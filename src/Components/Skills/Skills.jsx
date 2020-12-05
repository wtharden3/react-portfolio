import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Skills = () => {
  return (
    <Container fixed mx="20px">
      <Box container="div" className="Skills">
        <h1>Skills</h1>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon
              icon={['fab', 'html5']}
              color="#ffffff"
              size="4x"
            />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon icon={['fab', 'css3']} color="#ffffff" size="4x" />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon
              icon={['fab', 'js-square']}
              color="#ffffff"
              size="4x"
            />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon
              icon={['fab', 'react']}
              color="#ffffff"
              size="4x"
            />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon icon={['fab', 'node']} color="#ffffff" size="4x" />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon icon={['fab', 'sass']} color="#ffffff" size="4x" />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon
              icon={['fab', 'bootstrap']}
              color="#ffffff"
              size="4x"
            />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              color="#ffffff"
              size="4x"
            />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon icon={['fab', 'git']} color="#ffffff" size="4x" />
          </Grid>
          <Grid container item xs={6} sm={2} my={3}>
            <FontAwesomeIcon icon={['fab', 'jira']} color="#ffffff" size="4x" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
