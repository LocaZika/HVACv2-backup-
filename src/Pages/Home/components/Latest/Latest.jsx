import { Box, Container, Grid } from '@mui/material';
import './Latest.scss';
import { PostCard } from 'Components';


export default function Latest() {
  return (
    <Box component={'section'} className={'lastest spad'}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Box className='section-title'>
              <Box component={'span'}>
                our blogs
              </Box>
              <Box component={'h2'}>
                lastest new update
              </Box>
              <Box component={'p'}>
                Sign up for the latest Automobile Industry information and more. Duis aute <br/>
                irure dolorin reprehenderits volupta velit dolore fugiat.
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <PostCard limit={3} />
        </Grid>
      </Container>
    </Box>
  )
}
