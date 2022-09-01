import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { useWindowWidth } from '@react-hook/window-size'
import Banners from '../api/Banners.json';

export default function Campaigns() {
  const [banners, setBanners] = useState([]);
  const onlyWidth = useWindowWidth();

  const settings = {
    infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
    slidesToShow: 3,
		cssEase: 'linear',
		arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    setBanners(Banners);
  }, []);


  return (
    <div className={(onlyWidth >= 768 ? "container" : "") + " mx-auto flex"}>
      {onlyWidth > 768 && <h6 className='text-sm weight-600'>Kampanyalar</h6>}
      
      <Slider {...settings}>
        {banners && banners.map((banner, index) => {
          return (<div key={index}>
                    <picture className={(onlyWidth >= 768 ? "p-2" : "") + " d-block"}>
                      <img className={(onlyWidth >= 768 ? "rounded" : "") + " img-fluid"} src={banner.image} />
                    </picture>
                </div>)
        })}
          
          
      </Slider>
    </div>
  )
}
