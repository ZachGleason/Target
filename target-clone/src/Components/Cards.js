import React from 'react';
import '../Assets/Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
        <div className='card_one'>
            <img 
                src='https://target.scene7.com/is/image/Target/GUEST_7740022b-0f04-4476-95f2-2ac7e785f9d3?wid=800'
                alt='icon'
                className='card_image_one'
            />
            <div className='card_content_one'>
                <p className='card_text_one'>30% off</p>
                <p className='card_text_two'>Kingsford 14" portable charcoal grill</p>
            </div>
        </div>
        <div className='card_two'>
            <img 
                src='https://target.scene7.com/is/image/Target/GUEST_9065f84a-1aac-4166-b3bc-6f9729956502?wid=800'
                alt='icon'
                className='card_image_two'
            />
            <div className='card_content_two'>
                <p className='card_text_three'>Up to 30% off</p>
                <p className='card_text_four'>Kingsford 14" portable charcoal grill</p>
            </div>
        </div>
        <div className='card_three'>
            <img 
                src='https://target.scene7.com/is/image/Target/GUEST_8e29efb4-c16a-42f6-b268-a8997309fcd0?wid=800'
                alt='icon'
                className='card_image_three'
            />
            <div className='card_content_three'>
                <p className='card_text_five'>Up to 35% off</p>
                <p className='card_text_six'>Kingsford 14" portable charcoal grill</p>
            </div>
        </div>
        <div className='card_four'>
            <img 
                src='https://target.scene7.com/is/image/Target/Pool_TopDeals_1-1-220119-1642623694002?wid=800'
                alt='icon'
                className='card_image_four'
            />
            <div className='card_content_four'>
                <p className='card_text_seven'>All the top deals in one place!</p>
            </div>
        </div>
    </div>
  )
}

export default Cards;