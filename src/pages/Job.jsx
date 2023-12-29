/* eslint-disable */
import { Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Joblist } from 'src/sections/job';
import Shimmer from 'src/sections/job/Shimmer';

const Job = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const dataFetch = async () => {
    const url = 'https://jsearch.p.rapidapi.com/search?query=all&page=2&num_pages=2';
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
      setFiltered(data.data);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);
  console.log(filtered);

  return result.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <nav className="bg-slate-100 p-6">
        <label className="font-serif font-light text-base"> Search Job Title </label>
        <input
          type="text"
          placeholder="empty search give all result"
          className="border 2 mx-16 rounded-md h-9 w-56"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            const data = result.filter((singleItem) =>
              search.toLowerCase() === ''
                ? result
                : singleItem.job_title.toLowerCase().includes(search)
            );
            setFiltered(data);
            console.log(data);
          }}
        >
          {' '}
          Find{' '}
        </Button>
        <Link to={'/'}>
          <Button variant="contained" style={{ marginLeft: '20px' }}>
            Back
          </Button>
        </Link>
      </nav>
      <Grid
        container
        spacing={{ md: 2, sm: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: '10px' }}
      >
        {filtered.map((card, index) => (
          <Grid item xs={3} sm={4} md={3}>
            <Joblist key={index} data={card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Job;
