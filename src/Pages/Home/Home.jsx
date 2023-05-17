import { Grid } from '@mui/material';
import './Home.scss';
import { Car, ChooseUs, Cta, Feature, Hero, Latest, Service } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { webDbSlice } from 'Services/Redux';
import { useContext, useEffect } from 'react';
import { useFetch } from 'Services/Hooks';
import { webDbState } from 'Services/Redux';

export default function Home() {
  const { homePage } = useSelector(webDbState);
  if (homePage === undefined){
    return <div></div>
  }
  return (
    <Grid className='home' sx={{padding: 0}}>
      <Hero db={homePage.hero} />
      <Service db={homePage.services} />
      <Feature db={homePage.features} />
      <Car db={homePage.car} />
      <ChooseUs db={homePage.chooseUs} />
      <Latest db={homePage.blog} />
      <Cta db={homePage.cta} />
    </Grid>
  )
}
