import { useMediaQuery, Box, Container, Unstable_Grid2 as Grid, Link } from '@mui/material';
import './Feature.scss';
import FeatureItem from './FeatureItem';

export default function Feature() {
  const breakpointFix = useMediaQuery(theme => theme.breakpoints.down('lg'));
  return (
    <Box component={'section'} className='feature spad'>
      <Container disableGutters={true} fixed={true} >
        <Grid container>
          <Grid sm={12} lg={4} paddingX={'15px'} sx={
            breakpointFix === true ? {
              paddingBottom: '500px',
            } : {
              paddingBottom: 0,
            }
          }>
            <Box className={'section-title feature__title'}>
              <Box component={'span'}>
                our features
              </Box>
              <Box component={'h2'}>we are a trusted name in auto</Box>
            </Box>
            <Box className={'feature__desc'}>
              <Box component={'p'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et
              </Box>
              <Box component={'p'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis.
              </Box>
            </Box>
            <Box className={'feature__link'}>
              <Link href='#' underline='none'>about us</Link>
              <Link href='#' underline='none' className='partners'>Our partners</Link>
            </Box>
          </Grid>
          <Grid sm={12} lg={4} lgOffset={4} paddingX={'15px'}>
            <Grid container>
              <FeatureItem />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
