import './Blog.scss';
import { Box, Container, Grid } from "@mui/material";
import { Breadcrumb } from "Components";
import Pagination from 'Components';
import useFetch from 'Services/Hooks';

export default function Blog() {
  // const api = useFetch('/blog');
  return (
    <>
      <Breadcrumb />
      <Box component={'section'} className="blog spad">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} lg={9}>
              <Pagination />
            </Grid>
            <Grid item xs={12} md={6} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
