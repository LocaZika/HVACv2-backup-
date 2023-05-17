import { Box, Container, Grid } from '@mui/material';
import { Breadcrumb, SearchForm, Pagination } from 'Components';
import './Cars.scss';
import FormCarFilter from './Components/FormCarFilter';
import CarSort from './Components/CarSort';
import { ProductCard } from 'Components';
import { useFetch } from 'Services/Hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { webDbState } from 'Services/Redux';

export default function Cars() {
  const [extraOpt, setExtraOpt] = useState({
    sort: 'price',
    page: 1,
    order: 'desc',
    limit: 9,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [carList, setCarList] = useState([]);
  const {cars} = useSelector(webDbState);
  const api = useFetch('cars');
  const handleSortOptions = (limit, sortOption) => {
    setExtraOpt({
      ...extraOpt,
      order: sortOption,
      limit: limit,
    });
  }
  const handleClickPagination = (page) => {
    setExtraOpt({
      ...extraOpt,
      page: page,
    })
  };
  useEffect(() => {
    api.get(extraOpt).then(({res, data}) => {
      setTotalCount(Math.round(res.headers.get('X-Total-Count') / extraOpt.limit))
      setCarList(data);
    });
  }, []);
  if (carList.length === 0){
    return <div></div>
  }
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
              <Grid container className='cars-sort'>
                <CarSort setSort={handleSortOptions} />
              </Grid>
              <Grid container className='cars-list'>
                <ProductCard products={carList} lg={4} />
              </Grid>
              <Grid container className='cars-pagination'>
                <Pagination totalCount={totalCount} setPage={handleClickPagination}  />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
