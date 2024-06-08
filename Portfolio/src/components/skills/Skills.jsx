// Skills.js
import React from 'react';

import './skills.scss';
import HorizontalCards from './HorizontalCards';

const programmingLanguages = [

  { title: 'JavaScript', src : 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },

  { title: 'Java', src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9n6QSmgQptW2phyDWe1k6ZA8eRzhjlx2Vxg&s'},

  { title: 'C', src : 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'},

  { title: 'C++', src : 'https://avatars.githubusercontent.com/u/59276?s=280&v=4'},

  { title: 'Python', src : 'https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png'},

  { title: 'HTML', src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s'},

  { title: 'CSS', src : 'https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png'},

  { title: 'Node Js', src : 'https://i.pinimg.com/originals/79/c5/1d/79c51d0e3a3f60b504da6bcc20ab1afc.jpg'},



  
  
  
];

const toolsAndTechnologies = [
  { title: 'React Js', src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_t7-II1cznDmicpbrB8H5sx7MJIg6FPmwg&s'},

  { title: 'Express Js', src : 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'},

  { title: 'GSAP', src : 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg'},

  { title: 'Tailwind Css', src : 'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp'},

  { title: 'Photoshop', src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Photoshop_CC_icon.png/615px-Photoshop_CC_icon.png'},

  { title: 'Bootstrap', src : 'https://cdn.iconscout.com/icon/free/png-256/free-bootstrap-3628663-3029888.png?f=webp'},

  { title: 'Sass', src : 'https://sass-lang.com/assets/img/styleguide/seal-color.png'},

  

  { title: 'Figma', src : 'https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png'},

  { title: 'Canva', src : 'https://builtin.com/sites/www.builtin.com/files/2021-11/CIRCLE%20LOGO%20-%20GRADIENT%20-%20RGB_0.png'},

  { title: 'Numpy', src : 'https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png'},

  { title: 'Pandas', src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZd37oUzVXPHOsl-Ygg5hzYpZs7Djvk-vSw&s'},

  { title: 'Matplotlib', src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png'},

  

  


];



const Skills = () => {
  return (
    <div className="skills">
      <h1 className='firsth' >Programming Languages</h1>
      <HorizontalCards data={programmingLanguages}></HorizontalCards>

      <h1 >Tools and Frameworks</h1>
      <HorizontalCards data={toolsAndTechnologies}></HorizontalCards>
      
    </div>
  );
};

export default Skills;
