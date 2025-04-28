import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: `url(/img/firstBack.png)`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const App = () => (
  <Carousel autoplay autoplaySpeed={5000}>
    <div>
      <h3 style={contentStyle}>{""}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>{""}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>{""}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>{""}</h3>
    </div>
  </Carousel>
);

export default App;
