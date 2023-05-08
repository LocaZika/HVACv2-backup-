import { Box, Container, Grid } from '@mui/material';
import './Service.scss';
import ServiceItem from './ServiceItem';

const imgLink = {
  rental: {
    title: 'rental a car',
    img: 'https://preview.colorlib.com/theme/hvac/img/services/services-1.png',
    content: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.',
  },
  buying: {
    title: 'buying a car',
    img: 'https://preview.colorlib.com/theme/hvac/img/services/services-2.png',
    content: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.',
  },
  maintenance: {
    title: 'car maintenance',
    img: 'https://preview.colorlib.com/theme/hvac/img/services/services-3.png',
    content: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.',
  },
  support: {
    title: 'support 24/7',
    img: 'https://preview.colorlib.com/theme/hvac/img/services/services-4.png',
    content: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.',
  },
}
export default function Service() {
  return (
    <Box component={'section'} className="service spad">
      <Container fixed>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item lg={12} >
           <Box className='section-title'>
              <Box component={'span'}>
                our services
              </Box>
              <Box component={'h2'}>
                what we offer
              </Box>
              <Box component={'p'}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda at eligendi, magnam magni
              </Box>
            </Box>
          </Grid>
          <Grid container>
            <ServiceItem img={imgLink} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
