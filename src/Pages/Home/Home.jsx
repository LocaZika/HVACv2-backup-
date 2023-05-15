import { Grid } from '@mui/material';
import './Home.scss';
import { Car, ChooseUs, Cta, Feature, Hero, Latest, Service } from './components';
import { useEffect } from 'react';
import {useFetch} from 'Services/Hooks';

export default function Home() {
  const api = useFetch('options.ho')
  useEffect(() => {

  }, []);
  return (
    <Grid className='home' sx={{padding: 0}}>
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
