import React from 'react';

const Herosection = () => {
return (
<section id='hero section' className='hero--section'>
<div className='hero--section--img'>
<img src="./img/hero1.jpeg" alt="hero image" />
</div>
<div className='hero--section--content-box'>
<div className='hero--section--content'>
<h1 className='hero--section--title'>
<span className='hero--section--title-color'>Hi, I'm Hana</span>{""}
<br />
A Digital Designer
</h1>
<p className='hero--section--description'>
Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
Delectus excepturi voluptatem et non dolore.
</p>
</div>
<button className='btn btn-primary'>START A POROJECT</button>
</div>
</section>
);
};

export default Herosection;

