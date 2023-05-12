import { Box, Button, Container, Unstable_Grid2 as Grid, MenuItem, Select, TextField } from '@mui/material';
import './Call.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Call() {
  const [service, setService] = useState('');
  const handleChangeService = (e) => {
    setService(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <Box component={'section'} className='call spad set-bg'>
      <Container fixed>
        <Grid container>
          <Grid md={6} lg={5} className='call__text'>
            <Box className='section-title'>
              <Box component={'h2'}>
                request a call back
              </Box>
              <Box component={'p'}>
                Posters had been a very beneficial marketing tool because it had paved to deliver an
                effective message that conveyed customer’s
              </Box>
            </Box>
            <Link to={'#'}>contact us</Link>
          </Grid>
          <Grid md={6} lg={6} lgOffset={1}>
            <form className='call__form'>
              <Grid container sx={{margin: '0 -15px'}}>
                <Grid xs={12} lg={6} className='call__form__wrapper'>
                  <TextField required label='Name' className='call__form__input' />
                </Grid>
                <Grid xs={12} lg={6} className='call__form__wrapper'>
                  <TextField required label='Email' className='call__form__input' />
                </Grid>
                <Grid xs={12} lg={6} className='call__form__wrapper'>
                  <TextField required label='Phone' className='call__form__input' />
                </Grid>
                <Grid xs={12} lg={6} className='call__form__wrapper'>
                  <Select
                    value={service}
                    displayEmpty
                    onChange={handleChangeService}
                    className='call__form__input select'
                  >
                    <MenuItem value='' sx={{
                      fontSize: '15px',
                      color: '#353535',
                    }}>choose our service</MenuItem>
                    <MenuItem value='buy'>buy cars</MenuItem>
                    <MenuItem value='sell'>sell cars</MenuItem>
                    <MenuItem value='wash'>wash cars</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Button type='submit' onClick={handleSubmit} className='site-btn'>submit now</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
