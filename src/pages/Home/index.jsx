import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Plans from '../../components/Plans';
import Recommendations from '../../components/Recommendations';
import Wineshare from '../../components/Wineshare';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Plans />
      <Recommendations />
      <Wineshare />
      <Footer />
      <VLibras forceOnload />
    </>
  );
}

export default Home;
