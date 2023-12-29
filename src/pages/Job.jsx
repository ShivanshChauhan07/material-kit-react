import React, { useEffect } from 'react';

// space

import { Helmet } from 'react-helmet-async';

import { Joblist } from 'src/sections/job';

const Job = () => {
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
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <title> Login | Minimal UI </title>
        </Helmet>
        <h1>Hello</h1>
      </div>
      <Joblist />
    </>
  );
};

export default Job;
