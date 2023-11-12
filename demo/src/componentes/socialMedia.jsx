import React from 'react';
import '../hojas-de-estilo/stylesHome.css'

import facebookIcon from '../iconos/facebook-icon.svg'
import instagramIcon from '../iconos/instagram-icon.svg'
import linkedinIcon from '../iconos/linkedin-icon.svg'

function SocialMedia() {
  const socialMediaData = [
    {
      name: 'Facebook' ,
      icon: facebookIcon,
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
    },
    {
      name: 'Linkedin',
      icon: linkedinIcon,
    },
  ];
  
  return (
    <div className='box'>
      <div className="social-media-box">
        <h3>Redes Sociales</h3>
        <ul>
          {socialMediaData.map((social) => (
              <li key={social.name}>
                <hr className="news-separator" />
                <a href="#link">
                  <img src={social.icon} alt={social.name} />
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialMedia;

