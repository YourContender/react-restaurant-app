import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { reviews } from '../../data';
import bg from '../../img/01.gif';
import './Reviews.scss';
import { Slider } from '../slider/Slider';

function Reviews() {
    const data = reviews.map(item => {  
        return (
            <div className="reviews_page" key={item.id}>
                <div className="reviews_user">
                    <div>
                        <img src={item.photo} alt="review" />
                    </div>
                    <div>
                        <h3>{item.name}</h3>
                        <span>{item.city}</span>
                    </div>
                </div>

                <div className="reviews_line"></div>
                
                <div className="reviews_descr">
                    <span>{item.descr}</span>
                </div>
            </div>
            )
        }
    );

    console.log('data', data)
    
    return (
        <div className="reviews">
            <div className="reviews_title">
                <div className="reviews_subtitle">
                    <span>Reviews</span>
                </div>
                <div>
                    <h2>Our Clients Say</h2>
                </div>
                <div>
                    <span className="reviews_descr">
                        We love to hear from customers, so please leave 
                        a comment or say hello in an email.
                    </span>
                </div>
            </div>

            <Slider>
                {data}
            </Slider>

            <div className="reviews_bg">
                <img src={bg} alt="background image" />
                <div className="reviews_welcome">
                    <h1>Welcome to home!</h1>
                </div>
            </div>
        </div>
    )
}

export default Reviews;