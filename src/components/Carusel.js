import React from 'react';

import useFetch from '../hooks/useFetch'
import { URL_PELICULAS_LANZAMIENTOS } from '../utils/variables'

import { Link } from 'react-router-dom'


import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: auto,
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {

    const peliculasSteps = useFetch(URL_PELICULAS_LANZAMIENTOS)
    
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = peliculasSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
          </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {peliculasSteps.map((step, index) => (
          <div key={step.title}>

            {Math.abs(activeStep - index) <= 2 ? (

                <>
              <img className={classes.img} src={`https://image.tmdb.org/t/p/original${step.backdrop_path}`} alt={step.title} />
              <Typography>{step.title}</Typography>
              <h4>{step.overview}</h4>
              
              <Link to={`/detalle/${step.id}`}>
                         <Button variant="contained" color="primary">ver mas</Button>   
                        </Link>
              </>
              
            ) : null}


          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;

