import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import './ChooseUs.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const textList = [
  'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'integer et nisl et massa tempor ornare vel id orci.',
  'nunc consectetur ligula vitae nisl placerat tempus.',
  'curabitur quis ante vitae lacus varius pretium.',
];
export default function ChooseUs() {
  const [active, setActive] = useState(false);
  const breakpointFix = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const videoUrl = 'https://www.youtube.com/watch?v=RiVs0E554o0';
  const handlePlay = () => {
    setActive(true);
  }
  const handlePause = () => {
    setActive(false);
  }
  return (
    <Box component={'section'}
      className={
        active === true ?
          'choose-us spad active' : 'choose-us spad'
      }>
      <Container fixed>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={5}
            marginBottom={
              breakpointFix === true ? '40px' : ''
            }
            className='choose-us__text'
          >
            <Box className='choose-us__text__title'>
              <Box component={'h2'}>
                why people choose us
              </Box>
              <Box component={'p'}>
                Duis aute irure dolorin reprehenderits volupta velit dolore fugiat nulla pariatur
                excepteur sint occaecat cupidatat.
              </Box>
            </Box>
            <Box component={'ul'} className='choose-us__text__reasons'>
              {
                textList.map((item, index) => (
                  <Box key={index} component={'li'} >
                    <FontAwesomeIcon icon={faCircleCheck} color='#db2d2e' />
                    {item}
                  </Box>
                ))
              }
            </Box>
            <Link to={'/about'} className='choose-us__text__link'>about us</Link>
          </Grid>
          <Grid
            item
            xs={12}
            lg={
              active === true ? 12 : 7
            }
            style={
              breakpointFix === true ? {
                position: 'unset',
                height: '530px',
                clipPath: 'none',
              } : {}
            }
            className='choose-us__video'
          >
            <ReactPlayer
              url={videoUrl}
              width={'100%'}
              height={'100%'}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
