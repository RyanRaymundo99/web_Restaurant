import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="chase the new flavors" />
      <h1 className='app__header-h1'> The key to fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et obcaecati blanditiis expedita architecto fugiat dolor vitae placeat a atque quam? Cum et reiciendis omnis saepe assumenda eligendi dolorum aliquid quam.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="Header image" />
    </div>
  </div>
);

export default Header;
