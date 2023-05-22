import { Grid, Typography, Breadcrumbs, Container } from '@mui/material';
import { Home, NavigateNext } from '@mui/icons-material'
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import { convertPath } from 'Services/Ultilities/convertPath';
import { useEffect } from 'react';

export default function Breadcrumb({currentPath}) {
  const pathArr = convertPath(currentPath);
  /**
   * pathArr = [car-listing, car-detail, porche-9]
   * pathArr = [home, car-listing]
   * 
   */
  const createPathComponent = () => {
    let componentArr = [
      <Link key='breadcrumb-home' to={'/'} className='breadcrumb__link'>
        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
    ];
      for (let i = 0; i < pathArr.length - 1; i++) {
        componentArr.push(
          <Link key='breadcrumb-path' to={`/${pathArr[i]}`} className='breadcrumb__link'>
            {pathArr[i]}
          </Link>
        );
      }
    return componentArr;
  }
  const paths = [
    <Typography key="breadcrum-path" color="text.primary" className='breadcrumb__path'
      sx={{
      fontSize: '15px',
      color: '#727171',
    }}
    >
      {
        pathArr.length === 0 ? (
          currentPath
          ):(
          pathArr[pathArr.length - 1]
        )
      }
    </Typography>
  ];
  useEffect(() => {
    const pathCom = createPathComponent();
    if(pathArr.length === 0){
      paths.unshift(pathCom[0]);
    }else{
      const reversePathCom = pathCom.reverse();
      reversePathCom.map(path => paths.unshift(path));
    }
    console.log(paths);
  }, []);
  return (
    <Grid className='breadcrumb set-bg'>
      <Container sx={{textAlign: 'center'}}>
        <Grid item lg={12}>
          <h2>{currentPath}</h2>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" sx={{fill: '#fff',}} />}
            aria-label="breadcrumb"
          >
            {paths}
          </Breadcrumbs>
        </Grid>
      </Container>
    </Grid>
  )
}
