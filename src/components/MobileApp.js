import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'

export default function MobileApp() {
  const onlyWidth = useWindowWidth();

  return (
    <div className='container mt-3'>
      <div className='mx-auto bg-image-app rounded justify-content-between d-flex align-items-center'>
        <div className='d-flex flex-column p-5'>
          <h3 className='text-white fs-3 weight-600'>Getir'i indirin!</h3>
          <p className='text-white fs-6 weight-600'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
          <nav className='d-flex mt-4 gap-2'>
            <a href='#'>
              <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12' />
            </a>
            <a href='#'>
              <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12' />
            </a>
            <a href='#'>
              <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12' />
            </a>
          </nav>
        </div>
        {onlyWidth >= 768 && (
          <picture className='mt-4 align-self-end'>
            <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png' className='col-xxl-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12' />
          </picture>
        )}
        
      </div>
    </div>
    
  )
}
