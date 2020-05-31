import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Skeleton } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const data = [
  {
    src:
      'https://urbanbalance.com/wp-content/uploads/2015/04/Dollarphotoclub_72557373-1024x857.jpg',
    title: '8 tips for healthy eating',
    subtitle: 'Food',


    link: '/8-tips-for-health-eating'
  },
  {
    src: 
    'https://images.everydayhealth.com/images/digestive-health/tips-for-better-digestive-health-1440x810.jpg?w=1110',
    title: '7 Healthy Habits for a Healthy Life',
    subtitle: 'Habits',


    link: '/7-healthy-habits-healthy-life'
  },
  {
    src:
    'https://i.pinimg.com/originals/5d/6b/c3/5d6bc3ca3d5655769662474362ad3a7d.jpg',
    title: 'Creating Healthy Habits',
    subtitle: 'Habits',
    link: '/creating-healthy-habits'
  },
  {
    src:
    'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/HEPJan2015.jpg',
    title: 'Healthy Eating: The Beginner’s Guide on How to Eat Healthy and Stick to It',
    subtitle: 'Food',
    link: '/eat-healthy'
  },
  
];



function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container >
      {(loading ? Array.from(new Array(2)) : data).map((item, index) => (
        <Box key={index} width={325} marginLeft={5} marginRight={5} my={5}>
          {item ? (
            <img style={{ width: 325, height: 236 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant="rect" width={325} height={236} />
          )
          }

          {item ? (
            <Box pr={2}>
              <Typography gutterBottom variant="body2">
              <Link to={item.link}>{item.title}</Link>
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.subtitle}
              </Typography>
         
            </Box>
          ) : (
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="80%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}


export default function Articles() {
  return (
    <Box overflow="hidden">
      <Media  data/>
    </Box>
  );
}