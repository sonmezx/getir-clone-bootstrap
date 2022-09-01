import React, { useState } from "react";
import Slider from "react-slick";
import "../custom.css";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from '@react-hook/window-size'

export default function HeroSection() {
  const onlyWidth = useWindowWidth();

  const [selected, setSelected] = useState('TR');

  const flags = {
		US: '+1',
		GB: '+5',
		FR: '+70',
		DE: '+49',
		IT: '+11',
		TR: '+90',
	}

  const settings = {
    infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		arrows: false,
  };
  return (
    <>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

    <div className={(onlyWidth >= 768 ? "heroSectionGradient " : "") + "h-100 w-100 position-relative"}>
      {onlyWidth >= 768 && (
          <Slider {...settings}>
              <div>
                <img className="w-100 h-100 img-fluid" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
              </div>
              <div>
                <img className="w-100 h-100 img-fluid" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
              </div>
          </Slider>
      )}
        <div className={(onlyWidth >= 768 ? "container transform-50 position-absolute " : "") + "d-flex align-items-center justify-content-between h-100 w-100 top-0 z-index-20"}>
          {onlyWidth >= 768 && (
            <div>
              <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
              <h3 className="text-white mt-4 fs-1 fw-bold">Dakikalar içinde <br></br> kapınızda</h3>
            </div>
          )}
          
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 d-grid gap-3 rounded card border-0 p-4">
            <h6 className="weight-600 text-center text-color-brand-primary-color mb-3">Giriş yap veya kayıt ol</h6>
            <div className="d-flex gap-3">
                <ReactFlagsSelect
									countries={Object.keys(flags)}
									customLabels={flags}
									selected={selected}
									onSelect={code => setSelected(code)}
                  className="flag-select"
								/>
                <label className="flex-1 position-relative d-block">
                  <input type="text" className="input-phone ml-3 w-100 px-4" />
                  <span className="position-absolute start-0 h-100 px-4 d-flex align-items-center phone-span">Telefon numarası</span>
                </label>
            </div>
            <button className="bg-color-brand-yellow-color rounded text-color-brand-primary-color weight-600 height-48 border-0 hover-btn">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
    </div>
    </>
  )
}
