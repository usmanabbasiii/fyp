import React from 'react';
import Navbar from '../components/Navbar';
import DropdownMenu from '../components/SlideDownMenu/SlideDownMenu';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 200px', backgroundColor: '#f2f2f2', padding: '20px' }}>
          <DropdownMenu />
        </div>
        <div style={{ flex: '1', padding: '20px' }}>
          <h1>Welcome to Bluetran!</h1>
          <p>This is the home page of our website.</p>
          <p>You can add your content here.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



