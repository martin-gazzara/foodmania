import React from 'react';
import Header from '../../components/Header';

import imgSrc from '../../assets/image/chef.jpg';

import './about.styles.scss';

const About = () => {
  return(
    <div className='About'>
      <Header/>
      <div className='container'>
        <div className='avatar'>
          <div className='imageContainer'>
            <img src={imgSrc} className='chef-avatar' alt="Our chefs"/>
          </div>
        </div>
        <div className='descriptionContainer'>
          <h1>Our chefs</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tortor dictum urna rutrum aliquet. Vestibulum tristique dolor vitae lectus convallis, ac tempor enim elementum. Suspendisse potenti. Proin massa ipsum, ullamcorper nec libero ac, interdum laoreet ex. Nullam a magna ornare, molestie augue sed, efficitur urna. Proin eget sem magna. Fusce malesuada a lacus ac pharetra. Nunc ut purus ac enim tincidunt tincidunt in eu urna. In varius venenatis libero nec ultrices. Donec placerat odio tellus, sit amet faucibus risus tincidunt et. Ut auctor lorem tristique turpis lobortis, in gravida felis dignissim. Nam pharetra ex vitae augue condimentum blandit. Cras auctor ante eget elit aliquam, at pellentesque nunc dapibus.</p>
          <p>Donec hendrerit, nisi in tincidunt varius, eros quam sagittis lacus, quis egestas mauris ipsum non libero. Nunc vel tempor metus, a mollis sapien. Nunc ac blandit sapien, euismod rutrum neque. Integer lacus ante, pellentesque vulputate eros quis, rutrum mollis ex. In mattis est eget nibh elementum pellentesque. Donec enim dolor, finibus sit amet tellus quis, vulputate tempor nisi. Morbi placerat dictum arcu eget suscipit. Maecenas sed malesuada elit. Sed eu blandit arcu. Donec sed condimentum nibh. Mauris sodales lectus sem, quis varius erat tempus eget. Proin volutpat ipsum vel dapibus malesuada.</p>
        </div>
      </div>
    </div>
  )
}

export default About;