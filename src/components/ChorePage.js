import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chore from './Chore';

const ChorePage = () => {
  const [chores, setChores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadingTimeOut = setTimeout(() => {
      if (!chores.length) {
        setLoading(false);
      }
    }, 5000);

    // Write your GET fetch() or axious() request here

    axios.get('http://localhost:3111/chores/list').then((res) => {
      console.log(res);
      setChores(res.data);
      setLoading(false);
    });

    return () => clearTimeout(handleLoadingTimeOut);
  }, []);

  if (loading && !chores.length) {
    return <h2>Loading...</h2>;
  }

  if (!loading && !chores.length) {
    return <h2>Oops, something went wrong. Please try again later!</h2>;
  }

  return (
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
      </div>
      <div class='columns'>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
      </div>
    </div>
  );
};

export default ChorePage;
