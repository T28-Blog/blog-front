import React from 'react';
import Hashtag from 'components/hashtag';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Hashtag />
    </div>
  );
};

export default Home;
