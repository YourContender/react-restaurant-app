import bg from '../../img/01.gif';
import './Reviews.scss';
import { useState } from 'react';
import { reviews } from '../../data';

function Reviews() {
    const [count, setCount] = useState(1);

    const incCalc = () => {
        if (count > reviews.length - 1) {
            return setCount(1);
        }

        return setCount(count + 1)
    }

    const decCalc = () => {
        if (count === 1) {
            return setCount(reviews.length);
        }
        console.log('example:', count - 1)

        return setCount(count - 1);
        // return setCount(count < 0 ? reviews.length : count - 1)
    }

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

            <div className="reviews_slider">
                <div className="reviews_slider_pages">
                    {reviews.map(item => {
                        if (item.id === count) {
                            return (
                                <div className="reviews_page reviews_first">
                                    <div className="reviews_user">
                                        <div>
                                            <img src={item.photo} alt="review logo" />
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
                    })}
                    
                    {/* <div className="reviews_page reviews_first">
                        <div className="reviews_user">
                            <div>
                                <img src={review1} alt="review logo" />
                            </div>
                            <div>
                                <h3>Anna</h3>
                                <span>Kryvyi Rih</span>
                            </div>
                        </div>

                        <div className="reviews_line"></div>
                        
                        <div className="reviews_descr">
                            <span>
                                They known for its fabulous taste and food.
                                Anywhere you go your hunger is satisfied. The 
                                best chicken & burgers those are yummy.
                            </span>
                        </div>
                    </div>

                    <div className="reviews_page">
                        <div className="reviews_user">
                            <div>
                                <img src={review2} alt="review logo" />
                            </div>
                            <div>
                                <h3>Ivan Korobka</h3>
                                <span>Kropivnitsky</span>
                            </div>
                        </div>

                        <div className="reviews_line"></div>
                        
                        <div className="reviews_descr">
                            <span>
                                I have visited this fantastic restaurant on 
                                several occasions, food is absolutely 
                                outstanding & attention to detail is in
                                league of its own.
                            </span>
                        </div>
                    </div>

                    <div className="reviews_page">
                        <div className="reviews_user">
                            <div>
                                <img src={review3} alt="review logo" />
                            </div>
                            <div>
                                <h3>Artem</h3>
                                <span>Kyiv</span>
                            </div>
                        </div>

                        <div className="reviews_line"></div>
                        
                        <div className="reviews_descr">
                            <span>
                                Perfectly known for its fabulous taste and
                                food. Anywhere your hunger is satisfied. They
                                give best fried chicken and burgers those are 
                                yummy.
                            </span>
                        </div>
                    </div> */}
                </div>
                <div>
                    <button onClick={() => decCalc()}>Left</button>
                    <button onClick={() => incCalc()}>Right</button>
                </div>
            </div>

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