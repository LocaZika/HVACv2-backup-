import { Box, Container, Grid } from '@mui/material';
import { Breadcrumb, SearchForm } from 'Components';
import './Cars.scss';
import FormCarFilter from './Components/FormCarFilter';
import CarSort from './Components/CarSort';
import CarList from './Components/CarList';

export default function Cars() {
  return (
    <>
      <Breadcrumb currentPath={'car listing'} />
      <Box component={'section'} className='cars spad'>
        <Container fixed>
          <Grid container>
            <Grid item xs={12} lg={3} paddingX={'15px'} >
              <Box className='cars__sidebar' >
                <Box className='cars__sidebar__search'>
                  <Box component={'h5'}>car search</Box>
                  <SearchForm path={'cars'} />
                </Box>
                <Box className='cars__sidebar__filter'>
                  <Box component={'h5'}>car filter</Box>
                  <FormCarFilter />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={9} paddingX={'15px'}>
              <Box className='cars__sort'>
                <CarSort />
              </Box>
              <Box className='cars__list'>
                <CarList />
              </Box>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
