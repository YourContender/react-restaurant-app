import sing from '../../img/about/sing.png';
import image from '../../img/about/image.png';
import loc from '../../img/about/location.png'
import tim from '../../img/about/timer.png'
import book from '../../img/about/book.png'
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about_container">
                <div className="about_image">
                    <img src={image} alt="restaurant photo" />
                </div>
                <div className="about_descr">
                    <h2>The Delicious Story</h2>
                    <span>
                        The people, food and the prime locations make the perfect place<br/>
                        for the friends & family to come together and have great time.
                    </span>

                    <div className="about_us">
                        <div className="about_us_left">
                            <h3>2018</h3>
                            <span>
                                Plan for this restaurant to <br/>
                                deliver healthy food.
                            </span>
                        </div>

                        <div>
                            <h3>2022</h3>
                            <span>
                                Happily in the fourth year <br/>
                                by fulfill the motto.
                            </span>
                        </div>

                    </div>
                    
                    <div className="about_sing">
                        <span>
                            JOSEFINE
                        </span>

                        <img src={sing} alt="sing" />
                    </div>
                </div>
            </div>

            <div className="about_other">
                <button>other</button>
            </div>

            <div className="about_footer">
                <div className="about_footer_item">
                    <div className='about_footer_item_logo'>
                        <img src={loc} alt="location" />
                    </div>
                    <div>
                        <h5>Locate Us</h5>
                        <span>Riverside 25, San Diego, California</span>
                    </div>
                </div>

                <div className="about_footer_item">
                    <div className='about_footer_item_logo'>
                        <img src={tim} alt="timer" />
                    </div>
                    <div>
                        <h5>Open Hours</h5>
                        <span>Mon To Fri 9:00 AM - 9:00 PM</span>
                    </div>
                </div>

                <div className="about_footer_item">
                    <div className='about_footer_item_logo'>
                        <img src={book} alt="book" />
                    </div>
                    <div>
                        <h5>Reservation</h5>
                        <span>restaurantate@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="about_map">
                <iframe className="about_map_place" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7424.996785362021!2d30.54722047909498!3d50.44591173288403!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1676420440060!5m2!1sru!2sua" width="600" height="450"></iframe>
            </div>
        </div>
    )
}

export default About;