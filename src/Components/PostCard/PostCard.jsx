import { Box, Grid } from '@mui/material';
import './PostCard.scss';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

const db = [
  {
    id: 1,
    title: 'benjamin franklin s method of habit formation',
    postedBy: 'nicholas brewer',
    comments: [
      {
        id: 1,
        commentBy: 'admin',
        comment: 'check comment 1',
      },
      {
        id: 2,
        commentBy: 'admin2',
        comment: 'check comment 2',
      },
      {
        id: 3,
        commentBy: 'admin3',
        comment: 'check comment 3',
      },
    ],
    postDate: 'dec 19, 2011',
    previewContent: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    image: 'https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-1.jpg',
  },
  {
    id: 2,
    title: 'benjamin franklin s method of habit formation',
    postedBy: 'polly williams',
    comments: [
      {
        id: 1,
        commentBy: 'admin',
        comment: 'check comment 1',
      },
      {
        id: 2,
        commentBy: 'admin2',
        comment: 'check comment 2',
      },
    ],
    postDate: 'dec 19, 2012',
    previewContent: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    image: 'https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-2.jpg',
  },
  {
    id: 3,
    title: 'burning desire golden key or red herring',
    postedBy: 'nicholas brewer',
    comments: [],
    postDate: 'sep 19, 2012',
    previewContent: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    image: 'https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-3.jpg',
  },
  {
    id: 4,
    title: 'how to set intentions that energize you',
    postedBy: 'mattie ramirez',
    comments: [
      {
        id: 1,
        commentBy: 'admin',
        comment: 'check comment 1',
      },
    ],
    postDate: 'nov 22, 2015',
    previewContent: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    image: 'https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-1.jpg',
  },
];
/**
 * 
 * @param {number} limit set post limited number. Default is 20
 * @param {boolean} preview set post preview. Default is true
 * @returns 
 */
export default function PostCard(props) {
  // fetch db
  // clone the db
  const { limit, preview } = props;
  const cloneDb = [...db].reverse();
  const optionLimit = limit ?? 20;
  const optionPreview = preview ?? true;
  let templates = [];
  const createTemplatePre = () => {
    for (let i = 0; i < optionLimit; i++) {
      const item = cloneDb[i];
      const templatePreview = (
        <Box className='post-card' >
          <Box className='post-card__pic'>
            <Box
              width={'100%'}
              height={'220px'}
              borderRadius={'2px'}
              sx={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></Box>
            <Box component={'ul'}>
              <Box component={'li'}>
                by&nbsp;{item.postedBy}
              </Box>
              <Box component={'li'}>
                {item.postDate}
              </Box>
              <Box component={'li'}>
                {item.comments.length}&nbsp;comments
              </Box>
            </Box>
          </Box>
          <Box className='post-card__text'>
            <Box component={'h5'}>
              {item.title}
            </Box>
            <Box component={'p'}>
              {item.previewContent}
            </Box>
            <Link to={`/blog/blog-detail/${item.id}`}>
              view more
              <FontAwesomeIcon icon={faLongArrowRight} color='#db2d2e' />
            </Link>
          </Box>
        </Box>
          
      );
      templates.push(templatePreview);
    }
  };
  const createTemplateNonPre = () => {
    for (let i = 0; i < optionLimit; i++) {
      const item = cloneDb[i];
      const templatePreview = (
        <Box className='post-card no-preview' >
          <Link
            to={`blog/blog-detail/${item.id}`}
            className='post-card__pic set-bg'
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <Box
              width={'100%'}
              height={'115px'}
              borderRadius={'2px'}
              position={'relative'}
              bgcolor={'rgba(0, 0, 0, 0.5)'}
            >
              <Box className='post-card__pic__info' >
                <Box component={'h6'}>
                  {item.title}
                </Box>
                <Box component={'ul'}>
                  <Box component={'li'}>
                    by&nbsp;{item.postedBy}
                  </Box>
                  <Box component={'li'}>
                    {item.postDate}
                  </Box>
                  <Box component={'li'}>
                    {item.comments.length}&nbsp;comments
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      );
      templates.push(templatePreview);
    }
  };
  if(optionPreview === true) {
    createTemplatePre();
  }else{
    createTemplateNonPre();
  }
  return (
    <>
      {
        templates.map((component, index) => (
            <Grid key={index} item xs={12} md={6} lg={4} paddingX={'15px'}>
              {component}
            </Grid>
        ))
      }
    </>
  )
}
