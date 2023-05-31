import { useState } from 'react';
import './AboutUs.scss';
import { Box, Container, Grid } from '@mui/material';

const aboutFeatures = [
  {
    title: 'quality assurance system',
    image: 'https://preview.colorlib.com/theme/hvac/img/about/af-1.png',
    text: 'it seems though that some of the biggest problems with the internet advertising trends are the lack of'
  },
  {
    title: 'accurate testing processes',
    image: 'https://preview.colorlib.com/theme/hvac/img/about/af-2.png',
    text: 'where do you register your complaints? how can you protest in any form against companies whose'
  },
  {
    title: 'infrastructure integration technology',
    image: 'https://preview.colorlib.com/theme/hvac/img/about/af-3.png',
    text: 'So in final analysis: it’s true, I hate peeping Toms, but if I had to choose, I’d take one any day over an'
  },
];
const aboutOrientation = {
  image: 'https://preview.colorlib.com/theme/hvac/img/about/about-pic.jpg',
  mission: {
    title: 'our mission',
    text: 'Now, I’m not like Robin, that weirdo from my cultural anthropology class; I think that advertising is something that has its place in our society; which for better or worse is structured along a marketplace economy. But, simply because I feel advertising has a right to exist, doesn’t mean that I like or agree with it, in its'
  },
  vision: {
    title: 'our vision',
    text: 'Where do you register your complaints? How can you protest in any form against companies whose advertising techniques you don’t agree with? You don’t. And on another point of difference between traditional products and their advertising and those of the internet nature, simply ignoring internet advertising is'
  },
}
export default function AboutUs() {
  const [about, setAbout] = useState({});
  const convertText = (text) => {
    const pattern = /(?<=(\?|\.)\s)[a-zA-Z]/g;
    return text.replace(pattern, (c => c.toUpperCase()));
  }
  return (
    <Box component={'section'} className="about spad">
      <Container fixed>
        <Grid container>
          <Grid item lg={12} className="section-title about__title">
            <Box component={'h2'}>
              wellcome to HVAC auto online<br />
              we provide everything you need to a car
            </Box>
            <Box component={'p'}>
              First I will explain what contextual advertising is. Contextual advertising means the
              advertising of products on a website according to <br />
              the content the page is displaying.
              For example if the content of a website was information on a Ford truck then the
              advertisements
            </Box>
          </Grid>
          <Grid container className='about__features'>
            {
              aboutFeatures.map(({title, image, text}, index) => (
                <Grid key={index} item xs={12} md={6} lg={4} className='about__features__item'>
                  <Box component={'img'} src={image}></Box>
                  <Box component={'h5'}>{title}</Box>
                  <Box component={'p'}>{convertText(text)}</Box>
                </Grid>
              ))
            }
          </Grid>
          <Grid container className='about__orientation'>
            <Grid item lg={12} className='about__orientation__image'>
              <Box component={'img'} src={aboutOrientation.image}></Box>
            </Grid>
            <Grid container item lg={12} marginX={'-13px'}>
              <Grid item sm={12} md={6} lg={6} className='about__orientation__item'>
                <Box component={'h5'}>{aboutOrientation.mission.title}</Box>
                <Box component={'p'}>{aboutOrientation.mission.text}</Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6} className='about__orientation__item'>
                <Box component={'h5'}>{aboutOrientation.vision.title}</Box>
                <Box component={'p'}>{aboutOrientation.vision.text}</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
