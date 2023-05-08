import { Box, Unstable_Grid2 as Grid } from "@mui/material";

const featureItems = [
  {
    title: 'engine',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-1.png',
  },
  {
    title: 'turbo',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-2.png',
  },
  {
    title: 'cooling',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-3.png',
  },
  {
    title: 'suspension',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-4.png',
  },
  {
    title: 'electrical',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-5.png',
  },
  {
    title: 'break',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-6.png',
  },
]
export default function FeatureItem() {
  return (
    <>
      {
        featureItems.map(({title, img}, index) => (
          <Grid key={index} sm={4} md={4} lg={6} className='feature__item'>
            <Box className='feature__item__icon' >
              <Box component={'img'} src={img}></Box>
            </Box>
            <Box component={'h6'}>{title}</Box>
          </Grid>
        ))
      }
    </>
  )
}
