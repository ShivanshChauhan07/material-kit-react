/* eslint-disable */
import { Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { Joblist } from 'src/sections/job';

const Job = () => {
  const [result, setResult] = useState([]);
  const dataFetch = async () => {
    const url = 'https://jsearch.p.rapidapi.com/search?query=all&page=1&num_pages=1';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6e58962aa0msha9db3073001fc16p15acbfjsn51adeea9c845',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResult(data.data);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  console.log(result);

  return result.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <>
      <nav className="bg-slate-100 p-6">
        <label className="font-serif font-light text-base"> Search Job </label>
        <input type="text" className="border 2 mx-16 rounded-md h-9" />
        <Button variant="contained"> Find </Button>
      </nav>
      <Grid container spacing={{ md: 2 }}>
        {result.map((card, index) => (
          <Grid item xs={3} sm={4} md={3}>
            <Joblist key={index} data={card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Job;
