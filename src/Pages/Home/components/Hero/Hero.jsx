import './Hero.scss';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Grid, Link, Tab, useMediaQuery } from "@mui/material";
import { useState } from "react";
import FormHeroSearch from "./FormHeroSearch";

export default function Hero() {
  const [tab, setTab] = useState('1');
  const breakpointFix = useMediaQuery(theme => (
    theme.breakpoints.down('lg')
  ));
  const handleChangeTab = (e, newTab) => setTab(newTab);
  return (
     <Box component={'section'} className="hero set-bg">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={12} lg={7} sx={
              breakpointFix === true ? {
                paddingBottom: '40px',
              } : {
                paddingBottom: 0,
              }
            }>
              {/* Title */}
              <Box sx={{paddingTop: 13.75}}>
                <Box sx={{
                  marginBottom: 3.5,
                  color: '#fff',
                  fontWeight: '700',
                }}>
                  <Box component={'span'} sx={{
                    fontSize: '20px',
                    textTransform: 'uppercase',
                  }}>find your dream car</Box>
                  <Box sx={{
                    fontSize: '60px',
                    marginTop: '10px',
                  }}>Porsche Cayenne S</Box>
                </Box>
              </Box>
              {/* Price */}
              <Box sx={{
                paddingLeft: '140px',
                marginBottom: '55px',
                position: 'relative',
                textTransform: 'capitalize',
              }}>
                <Box sx={{
                  fontSize: '13px',
                  color: '#323232',
                  fontWeight: 700,
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: '#ffffff',
                  borderRadius: '2px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}>
                  model 2019
                </Box>
                <Box component={'h2'} sx={{
                  fontSize: '50px',
                  color: '#ffffff',
                  fontWeight: 700,
                  lineHeight: '45px',
                }}>
                  $399
                  <Box component={'span'} sx={{
                    fontSize: '42px',
                    textTransform: 'capitalize',
                  }}>/month</Box>
                </Box>
              </Box>
              {/* Links */}
              <Link href="#" className="hero__link">
                <img src="https://preview.colorlib.com/theme/hvac/img/wheel.png" alt="wheel icon" />
                test driver
              </Link>
              <Link href="#" className="hero__link" sx={{
                background: 'transparent !important',
                border: '1px solid #ffffff',
              }}>Learn more</Link>
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Box>
                <TabContext value={tab}>
                  <Box>
                    <TabList onChange={handleChangeTab}>
                      <Tab label='car rental' value='1' className="hero__tab" />
                      <Tab label='buy car' value='2' className="hero__tab" />
                    </TabList>
                  </Box>
                  <TabPanel value='1' className="hero__tab-panel">
                    <Box component={'h2'}>
                      find your dream car
                    </Box>
                    <FormHeroSearch />
                  </TabPanel>
                  <TabPanel value='2' className="hero__tab-panel">
                    <Box component={'h2'}>
                      buy your dream car
                    </Box>
                    <FormHeroSearch />
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Container>
     </Box>
  )
}
