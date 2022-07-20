import React from 'react';
import '../Assets/Navigation.css'
import { BiSearch, BiCart } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';




const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='nav_icon_container'>
            <img 
            src='https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w'
            alt='icon'
            className='navigation_icon'
            />
        </div>
        <div className='navigation_left'>
            <p><b>Categories</b></p>
            <p><b>Deals</b></p>
            <p><b>What's New</b></p>
            <p><b>Pickup & Delivery</b></p>    
        </div>
        <div className='nav_response'>
            <div className='navigation_input'>
                <input placeholder='Search' className='input'></input>
                <BiSearch className='search_icon'/>
            </div>
        </div>
        <div className='nav_end'>
            <CgProfile className='profile_icon'/>
            <p>Sign in</p>
        </div>
        <div className='nav_end_two'>
            <BiCart className='cart_icon'/>
        </div>
    </div>
  )
}

export default Navigation