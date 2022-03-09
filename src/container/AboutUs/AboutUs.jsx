import React from 'react';

import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="About spoon" className='spoon' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat sequi iusto quia autem. Fugiat ducimus doloribus beatae, error expedita explicabo molestias tempore, eveniet sapiente corporis harum debitis delectus quibusdam.</p>
        <button type='buttton' className='custom__button'>know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about us knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="About spoon" className='spoon' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat sequi iusto quia autem. Fugiat ducimus doloribus beatae, error expedita explicabo molestias tempore, eveniet sapiente corporis harum debitis delectus quibusdam.</p>
        <button type='buttton' className='custom__button'>know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
