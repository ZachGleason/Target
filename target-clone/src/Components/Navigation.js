import React from 'react';
import '../Assets/Navigation.css';
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
            <div className='nav_border'>
                <button><b>Categories</b></button>
            </div>
            <div className='nav_border'>
                <button><b>Deals</b></button>
            </div>
            <div className='nav_border'>
                <button><b>What's New</b></button>
            </div>
            <div className='nav_border'>
                <button><b>Pickup & Delivery</b></button>  
            </div>  
        </div>
        <div className='nav_response'>
            <div className='navigation_input'>
                <input placeholder='Search' className='input'></input>
                <div className='search'>
                    <BiSearch className='search_icon'/>
                </div>
            </div>
        </div>
        <div className='nav_end'>
            <button>
                <CgProfile className='profile_icon'/>
                <p>Sign in</p>
            </button>
        </div>
        <div className='nav_end_two'>
            <button>
                <BiCart className='cart_icon'/>
            </button>
        </div>
    </div>
  )
}

export default Navigation