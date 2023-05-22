import { Box, Container, Grid } from '@mui/material';
import { Breadcrumb, SearchForm, Pagination } from 'Components';
import './Cars.scss';
import FormCarFilter from './Components/FormCarFilter';
import CarSort from './Components/CarSort';
import { ProductCard, searchFormState } from 'Components';
import { useFetch } from 'Services/Hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { webDbState } from 'Services/Redux';
import { useSearchParams } from 'react-router-dom';

export default function Cars() {
  const [extraOpt, setExtraOpt] = useState({
    sort: 'price',
    page: 1,
    order: 'desc',
    limit: 9,
    search: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);
  const [carList, setCarList] = useState([]);
  // const {cars} = useSelector(webDbState);
  const searchResult = useSelector(searchFormState);
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
  const handleSubmitSearch = (keyword) => {
    setExtraOpt({
      ...extraOpt,
      search: keyword
    })
  };
  useEffect(() => {
    api.get(extraOpt).then(({res, data}) => {
      let params = {};
      if (extraOpt.order !== 'desc'){
        params._order = extraOpt.order;
      }
      if (extraOpt.page !== 1){
        params._page = extraOpt.page;
      }
      if (extraOpt.limit !== 9){
        params._limit = extraOpt.limit;
      }
      if (extraOpt.search !== ''){
        params['q'] = extraOpt.search;
        extraOpt.page = 1;
      }
      setTotalCount(Math.ceil(res.headers.get('X-Total-Count') / extraOpt.limit));
      setCarList(data);
      console.log(searchResult);
      setSearchParams(params);
    });
  }, [totalCount, extraOpt]);
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
                  <SearchForm path={'cars'} onSetKeyword={handleSubmitSearch} />
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
                <ProductCard products={
                    searchResult.length === 0 ? carList: searchResult
                  } lg={4} />
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
