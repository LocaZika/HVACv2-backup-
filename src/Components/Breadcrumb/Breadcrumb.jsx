import { Grid, Typography, Breadcrumbs, Container } from '@mui/material';
import { Home, NavigateNext } from '@mui/icons-material'
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function Breadcrumb({currentPath}) {
  const breadcrumb = [
    <Link key='breadcrumb-home' to={'/'} className='breadcrumb__link'>
      <Home sx={{ mr: 0.5 }} fontSize="inherit" />
      Home
    </Link>,
    <Typography key="breadcrum-path" color="text.primary" className='breadcrumb__path'
      sx={{
      fontSize: '15px',
      color: '#727171',
    }}
    >
      {currentPath}
    </Typography>,
  ];
  return (
    <Grid className='breadcrumb set-bg'>
      <Container sx={{textAlign: 'center'}}>
        <Grid item lg={12}>
          <h2>{currentPath}</h2>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" sx={{fill: '#fff',}} />}
            aria-label="breadcrumb"
          >
            {breadcrumb}
          </Breadcrumbs>
        </Grid>
      </Container>
    </Grid>
  )
}
