import { Container, Grid, Unstable_Grid2 as Grid2 } from '@mui/material';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import FooterLeft from './FooterLeft';
import FooterInfo from "./FooterInfo";
import FooterCarType from "./FooterCarType";
import FooterTopBrands from "./FooterTopBrands";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <footer className='set-bg'>
      <Container fixed>
        <Grid container justifyContent={'space-between'}
          sx={{
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '65px',
          }}
        >
          <Grid item lg={6}>
            <h2 className='contact__title'>contact us now!</h2>
          </Grid>
          <Grid item lg={6} sx={{textAlign: 'right'}}>
            <div className='contact contact__tel'>
              <FontAwesomeIcon icon={faPhone} />
              (+84) 123 456 789
            </div>
            <div className='contact contact__email'>
              <FontAwesomeIcon icon={faEnvelope} />
              locazika@gmail.com
            </div>
          </Grid>
        </Grid>
        <Grid>
          <Grid2 container>
            <Grid2 md={4} lg={4} className='footer__left' sx={{marginBottom: '20px'}}>
              <FooterLeft />
            </Grid2>
            <Grid2 md={3} lg={2} lgOffset={1} >
              <FooterInfo />
            </Grid2>
            <Grid2 md={3} lg={2}>
              <FooterCarType />
            </Grid2>
            <Grid2 md={6} lg={3}>
              <FooterTopBrands />
            </Grid2>
          </Grid2>
          <div className="footer__copyright">
            <p>
              copyright &copy; {getYear()} <span>all</span> rights reserved | <span>this</span> template is made by
              <a href="http://facebook.com/locazika"> Locazika</a>  
            </p> 
          </div>
        </Grid>
      </Container>
    </footer>
  )
}
