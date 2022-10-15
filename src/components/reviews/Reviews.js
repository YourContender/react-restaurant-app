import review1 from '../../img/review/review1.png';
import review2 from '../../img/review/review2.png';
import review3 from '../../img/review/review3.png';
import bg from '../../img/01.gif';
import './Reviews.scss';

const Reviews = () => {

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
                <div className="reviews_container reviews_first">
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

                <div className="reviews_container">
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

                <div className="reviews_container">
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