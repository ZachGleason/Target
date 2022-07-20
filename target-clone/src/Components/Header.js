import React from 'react';
import '../Assets/Header.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <p className='header_content_one'>My Store • Closes At 10pm</p>
            <p className='header_content_two'><b>Rohnert Park</b> <RiArrowDropDownLine /></p>
        </div>
        <div className='header_right'>
            <p>Registry</p>
            <p>Weekly Ad</p>
            <p>RedCard</p>
            <p>Target Circle</p>
            <p>Find Stores</p>
        </div>
    </div>
  )
}

export default Header