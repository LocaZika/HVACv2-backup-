import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Box, Link } from "@mui/material";
import { Fragment } from "react";


export default function ServiceItem({img}) {
  const objLength = Object.keys(img).length;
  const template = [];
  const handleRender = () => {
    for (let i = 0; i < objLength; i++) {
      const objValue = Object.values(img)[i];
      template.push(
        <Grid item paddingX={'15px'} xs={12} md={6} lg={3}>
          <Box className="service__item">
            <Box
              component={'img'}
              src={objValue.img}
            ></Box>
            <Box component={'h5'}>{objValue.title}</Box>
            <Box component={'p'}>{objValue.content}</Box>
            <Link
              href="/"
            >
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </Box>
        </Grid>
      )
    }
  };
  handleRender();
  return (
    <>
      {
        template.map((component, index) => (
          <Fragment key={index}>
            {component}
          </Fragment>
        ))
      }
    </>
  )
}
