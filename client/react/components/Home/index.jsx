import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Home = () => (
  <div className="mc-paper">
    <Skeleton height="19%" width="100%" count={5} />
  </div>
);

export default Home;
