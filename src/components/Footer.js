import React, {useEffect, useState} from 'react'
import Menus from '../api/Menus.json';
import {BsGlobe2} from 'react-icons/bs'
import {FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Menu from './Menu';

export default function Footer() {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(Menus);
  } , []);

  return (
    <div className='bg-white py-4 mt-5 shadow'>
      <div className='container mx-auto'>
        <div className='row justify-content-between'>
          <div className='col-md-3 mb-4'>
            <span className='text-color-brand-primary-color fs-5'>Getir'i indirin!</span>
            <nav className='row mt-3 gap-3'>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
              </a>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
              </a>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
              </a>
            </nav>
          </div>

          {menus && menus.map((menu, index) => { return <Menu key={index} {...menu} /> })}
        </div>
        <div className='w-100 border border-1 d-flex justify-content-between mt-4 opacity-50 mb-3'></div>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='d-flex gap-3 fs-13'>
              &copy; 2022 Getir <a className='bth text-color-brand-primary-color text-decoration-none '>Bilgi Toplumu Hizmetleri</a>
            </div>
          </div>
          <div className='col-md-4'>
            <nav className='d-flex gap-3'>
              <a href='#' className='fs-15 hover-cat rounded p-2'>
                <FaFacebook />
              </a>
              <a href='#' className='fs-15 hover-cat rounded p-2'>
                <FaTwitter />
              </a>
              <a href='#' className='d-flex align-items-center gap-2 justify-content-center text-decoration-none fs-15 hover-cat rounded p-2'>
                <FaInstagram />
              </a>
              <a className='d-flex align-items-center gap-2 justify-content-center text-decoration-none fs-14 hover-cat rounded p-2' href="#">
                  <BsGlobe2 />
                  Türkçe (TR)
              </a>
            </nav>
          </div>
          
        </div>

      </div>

    </div>
  )
}
