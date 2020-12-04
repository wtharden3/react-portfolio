import './MyWork.css';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import cssCreature from '../../assets/thumbs/css-creature-thumbnail.png';
import mockHtmlKast from '../../assets/thumbs/kast-thumbnail.png';
import pokeApi from '../../assets/thumbs/pokeApi-thumbnail.png';
import holiApi from '../../assets/thumbs/holidayApi-thumbnail.png';
import blueBadge from '../../assets/thumbs/blue-badge-group-project-thumb.png';

//project links
const cssCreatureLink = `https://codepen.io/wtharden3/pen/xxOxjRj`;
const mockHtmlKastLink = `https://wtharden3.github.io/mock_kast/`;
const pokeApiLink = `https://wtharden3.github.io/pokeApi/`;
const holiApiLink = `https://wh-holiday-api.web.app/`;
const blueBadgeLink = `https://kws-taskmaster-client.herokuapp.com/`;


const MyWork = () => {
  return (
    <div>
      <h1>MyWork</h1>
      <Box component="div" m={1}>
        <Grid
          spacing={1}
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid container item xs={6} md={4} zeroMinWidth>
            <a className="img-container" href={cssCreatureLink} target="_blank" rel="noreferrer">
              <img
                width="100%"
                src={cssCreature}
                alt="css creature assignment"
              />
            </a>
          </Grid>

          <Grid container item xs={6} md={4} zeroMinWidth>
            <a className="img-container" href={mockHtmlKastLink} target="_blank" rel="noreferrer">
              <img
                width="100%"
                src={mockHtmlKast}
                alt="mock HTML page"
              />
            </a>
          </Grid>
          <Grid container item xs={6} md={4} zeroMinWidth>
            <a className="img-container" href={pokeApiLink} target="_blank" rel="noreferrer">
              <img
                width="100%"
                src={pokeApi}
                alt="Pokemon Api assignment"
              />
            </a>
          </Grid>
          <Grid container item xs={6} md={4} zeroMinWidth>
            <a className="img-container" href={holiApiLink} target="_blank" rel="noreferrer">
              <img
                width="100%"
                src={holiApi}
                alt="holiday api assignment"
              />
            </a>
          </Grid>
          <Grid container item xs={6} md={4} zeroMinWidth>
            <a className="img-container" href={blueBadgeLink} target="_blank" rel="noreferrer">
              <img
                width="100%"
                src={blueBadge}
                alt="blue badge group project"
              />
            </a>
          </Grid>
        </Grid>
        <GridList cellHeight={300} cols={3}></GridList>
      </Box>
    </div>
  );
};

export default MyWork;
