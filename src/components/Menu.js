import React, {useState, useEffect} from 'react'
import {Collapse} from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size'
import {MdKeyboardArrowDown} from 'react-icons/md'


export default function Menu({title, items}) {
    const onlyWidth = useWindowWidth();
    
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        if(onlyWidth <= 768) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        if(isOpen && onlyWidth <= 768) {
            setIsOpen(false);
        }
        if(!isOpen && onlyWidth > 768) {
            setIsOpen(true);
        }
    } , [onlyWidth]);

  return (
    <div className='col-md-3 mb-4'>
        <nav className='d-grid gap-3'>
            <div className='row'>
                <span className='col-11 text-color-brand-primary-color fs-5 ' onClick={toggleCollapse}>{title}</span>
                {onlyWidth <=768 && 
                    <div className={(isOpen ? 'downCollapse-180 ' : 'downCollapse ') + "col-1 rounded px-2 text-color-brand-primary-color fs-5"}>
                        <MdKeyboardArrowDown onClick={toggleCollapse}/>
                    </div>
                }
                
                
            </div>
            <Collapse isOpened={isOpen}>
                <nav className='d-grid gap-3'>
                    {items.map((item, index) => {
                        return (
                            <a key={index} href='#' className='text-dark text-decoration-none fs-14'>{item.title}</a>
                        )
                    })}            
                </nav>
            </Collapse>
            
        </nav>
        
    </div>
  )
}
