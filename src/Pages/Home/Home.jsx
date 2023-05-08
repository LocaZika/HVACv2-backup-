import { Grid } from '@mui/material';
import './Home.scss';
import { Car, ChooseUs, Cta, Feature, Hero, Latest, Service } from './components';

export default function Home() {
  return (
    <Grid className='home'>
      <Hero />
      <Service />
      <Feature />
      <Car />
      <ChooseUs />
      <Latest />
      <Cta />
    </Grid>
  )
}
