import { Grid, Box, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

export default function CarSort({setSort}) {
  const [quantity, setQuantity] = useState('9');
  const [sortByPrice, setSortByPrice] = useState('desc');
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleSortByPrice = (e) => {
    setSortByPrice(e.target.value);
  };
  useEffect(() => {
    setSort(quantity, sortByPrice);
  }, [quantity, sortByPrice])
  return (
    <Grid container justifyContent={'space-between'} className="cars-sort__option" >
      <Grid item md={6} lg={6} className="cars-sort__option--quantity" >
        <Box component={'h6'}>show on page:</Box>
        <Select
          value={quantity}
          onChange={handleQuantity}
        >
          <MenuItem value={9}>9 cars</MenuItem>
          <MenuItem value={15}>15 cars</MenuItem>
          <MenuItem value={20}>20 cars</MenuItem>
        </Select>
      </Grid>
      <Grid item md={6} lg={6} className="cars-sort__option--price right" >
        <Box component={'h6'}>sort by:</Box>
        <Select
          value={sortByPrice}
          onChange={handleSortByPrice}
        >
          <MenuItem value={'asc'}>price: ascending</MenuItem>
          <MenuItem value={'desc'}>price: descending</MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}
