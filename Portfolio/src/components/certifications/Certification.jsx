
import React from 'react';

import './certification.scss';
import CertificationCards from './CertificationCards';



const certifications = [

  {src: 'python_certificates.png' , link: 'https://coursera.org/share/145b472667b88db78b49858fd29831fe' },

  { src: 'js_certificate.png' , link: 'https://drive.google.com/file/d/1RRG8JoSDzFwmjyNrfOcFfab2IsPgohix/view?usp=drive_link' }, 

  { src: 'java.jpg' , link: 'https://www.udemy.com/certificate/UC-155b3ff5-125f-4292-b454-83d39947c91e/' },

  { src: 'c.jpg' , link: 'https://www.sololearn.com/en/certificates/CC-SCDEY39J' },

  { src: 'python_udemy.jpg' , link: 'https://www.udemy.com/certificate/UC-43f349cf-bcc4-4ade-884b-50d486936163/' },

  { src: 'tailwind_udemy.jpg' , link: 'https://www.udemy.com/certificate/UC-4515b1ad-5986-472f-b56b-0fd4b9e54628/' },

  { src: 'css_greatlearning.png' , link: 'https://drive.google.com/file/d/154drRDLTGKm4wkpd48xj2CbqtJSrNfYr/view?usp=sharing' },

  { src: 'bootstrap_udemy.jpg' , link: 'https://www.udemy.com/certificate/UC-cb27a48e-11b9-4a31-b4fd-70ecd6668da2/' },

  
];

const Skills = () => {
  return (
    <div className="certi">
   
      <CertificationCards data={certifications}></CertificationCards>
      
    </div>
  );
};

export default Skills;
