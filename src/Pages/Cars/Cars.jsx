import { Box, Container, Grid } from '@mui/material';
import { Breadcrumb, SearchForm, Pagination } from 'Components';
import './Cars.scss';
import FormCarFilter from './Components/FormCarFilter';
import CarSort from './Components/CarSort';
import { ProductCard } from 'Components';
import { useFetch } from 'Services/Hooks';
import { useEffect, useMemo, useState } from 'react';

export default function Cars() {
  const [url, setUrl] = useState('');
  const [carList, setCarList] = useState([]);
  const fetcher = useFetch('cars');
  const handleUrlOptions = (quantity, sortOption) => {
    let urlOpt = '?'
    quantity !== 9 ? urlOpt += `&_limit=${quantity}` : urlOpt += '&_limit=9';
    sortOption !== 'desc' ? urlOpt += `&_sort=price&_order=${sortOption}` : urlOpt += '&_sort=price&_order=desc';
    console.log(urlOpt);
    setUrl(urlOpt);
  }
  const handleClickPagination = (page) => {
    let urlOpt = '';
    url.includes('?') === true ? urlOpt = url + `&_page=${page}` : urlOpt += `?_page=${page}`;
    setUrl(urlOpt);
  };
  useEffect(() => {
    fetcher('GET', url).then(({data}) => {
      setCarList(data);
    });
  }, []);
  const fetchData = useMemo(() => {
    fetcher('GET', url).then(({data}) => {
      setCarList(data);
    });
  }, [url]);
  return (
    <>
      {fetchData}
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
              <Grid container className='cars-sort'>
                <CarSort setSort={handleUrlOptions} />
              </Grid>
              <Grid container className='cars-list'>
                <ProductCard products={carList} lg={4} />
              </Grid>
              <Grid container className='cars-pagination'>
                <Pagination setPage={handleClickPagination}  />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
