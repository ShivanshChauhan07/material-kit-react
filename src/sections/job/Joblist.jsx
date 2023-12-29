/* eslint-disable */
import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import '../../global.css';

const Joblist = ({ data }) => {
  const { employer_name, employer_logo, job_title, job_city } = data;
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 300, maxHeight: 550 }}>
          <CardMedia
            component={'div'}
            style={{
              borderRadius: '10%',
              height: '100px ',
              backgroundImage: `url(${employer_logo})`,
              backgroundSize: 'contain',
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {job_title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut quasi
              consequatur debitis ducimus id quia similique quis optio, aliquid cumque facilis ad a
              pariatur at adipisci officia nesciunt vitae.
            </Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" size="small" color="success">
              Apply
            </Button>
            <Button variant="outlined" size="small" color="success">
              View Details
            </Button>
          </CardActions>
          <Typography variant="body2" style={{ marginLeft: '8px' }}>
            <hr />
            <i class="fa-solid fa-location-dot" style={{ marginRight: '12px' }}></i>
            {job_city}
          </Typography>
        </Card>
      </div>
    </>
  );
};

export default Joblist;
