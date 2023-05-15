import './ProductCard.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, CardActions, CardContent, Typography, Grid, Box, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * 
 * Create Product cards
 * @prop {array} product Set product array
 * @returns Product cards component
 */
export default function ProductCard(props) {
  const breakpointFix = useMediaQuery(theme => theme.breakpoints.down('md'));
  const { products, xs, md, lg } = props;
  let xsProp = xs ?? 12;
  let mdProp = md ?? 4;
  let lgProp = lg ?? 3;
  const createTemplate = (items) => {
    const itemsClone = [...items];
    let template = [];
    for (let i = 0; i < products.length; i++) {
      const {
        id,
        name,
        images,
        price,
        horsePower,
        mpg,
        yearOfManufacture,
        status,
        gearboxType,
      } = itemsClone[i];
      const component = (
        <Grid key={id} item xs={xsProp} md={mdProp} lg={lgProp} className='product-card'>
          <Card sx={
            breakpointFix === true ? {
              maxWidth: '100%',
            } : {
              maxWidth: 345,
            }
          }>
            <Carousel
              showThumbs={false}
              swipeable={true}
              dynamicHeight={true}
              emulateTouch={true}
              infiniteLoop={true}
              showArrows={false}
            >
              {images.map((image, index) => (
                <img key={index} src={image} alt='product-img' width={100} />
              ))}
            </Carousel>
            <CardContent>
              <Typography
                component={'div'}
                fontSize={'13px'}
                color={'#323232'}
                fontWeight={700}
                padding={'2px 15px 1px'}
                border={'1px solid #ebebeb'}
                borderRadius={'2px'}
                width={'62px'}
              >
                {yearOfManufacture}
              </Typography>
              <Typography
                gutterBottom
                component={'h5'}
                textTransform={'capitalize'}
                margin={'10px 0 14px 0'}
                fontSize={'18px'}
                minHeight={'54px'}
                height={'60px'}
              >
                <Link
                  to={`products/detail:${id}`}
                  className='product-card__title'
                >{name}</Link>
              </Typography>
              <Box
                component={'ul'}
                className='product-card__info'
              >
                <Box component={'li'}>
                  <Box component={'span'}>{mpg}</Box>
                  &nbsp;mi
                </Box>
                <Box component={'li'}>
                  <Box component={'span'} textTransform={'capitalize'}>{gearboxType}</Box>
                </Box>
                <Box component={'li'}>
                  <Box component={'span'}>{horsePower}</Box>
                  &nbsp;hp
                </Box>
              </Box>
            </CardContent>
            <CardActions className='product-card__price'>
              {
                status === 'sale' ? (
                  <Link to={`products/detail:${id}`}
                    className='product-card__price__option sale'
                  >for sale</Link>
                ) : (
                  <Link to={`products/detail:${id}`}
                    className='product-card__price__option'
                  >for rent</Link>
                )
              }
              <Box
                component={'h6'}
                fontSize='15px'
                color='#db2d2e'
                fontWeight={700}
                width={'100%'}
                flex={'0 0 60%'}
              >
                ${price}
                {
                  status === 'rent' ? (
                    <Box
                      component={'span'}
                      color='#727171'
                      fontSize='13px'
                      fontWeight={400}
                      textTransform={'capitalize'}
                    >/month</Box>
                  ) : null
                }
              </Box>
            </CardActions>
          </Card>
        </Grid>
      );
      template.push(component);
    }
    return template;
  }
  const renderTemplate = useMemo(() => createTemplate(products), [products])
  return renderTemplate;
}
