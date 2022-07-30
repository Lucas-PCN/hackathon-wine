import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Plans from '../../components/Plans';
import Recommendations from '../../components/Recommendations';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Plans />
      <Recommendations />
    </>
  );
}

export default Home;
