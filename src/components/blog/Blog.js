import blog1 from '../../img/blog/blog1.png';
import blog2 from '../../img/blog/blog2.png';
import './Blog.scss';

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog_promo">
                <div className="blog_subtitle">
                    <span>blog</span>
                </div>

                <div className="blog_title">
                    <h1>Be First Who Read News</h1>
                </div>

                <div className="blog_descr">
                    <span>
                        Explore the latest stories about our dishes, offers,<br/>
                        events and future plans here.
                    </span>
                </div>
            </div>

            <div className="blog_content">
                <div className="blog_content_item">
                    <div>
                        <img src={blog1} alt="blog logo" />
                        <button>View More</button>
                    </div>

                    <div>
                        <div className="blog_content_subtitle">
                            <div>
                                <span>Delicious</span>
                            </div>
                            <div className="blog_content_date">
                                <span>March 19, 2022</span>
                            </div>
                        </div>

                        <div className="blog_content_title">
                            <div>
                                <h2>The Legend of US Cuisine: The Story of Hungry People</h2>
                            </div>
                            
                            <div>
                                <span>
                                    Capitalize on low-hanging fruit to identify a ballpark value 
                                    added matrix economically and the creative activity to beta test 
                                    override the food quality.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_content_item">
                    <div>
                        <img src={blog2} alt="blog logo" />
                        <button>View More</button>
                    </div>

                    <div>
                        <div className="blog_content_subtitle">
                            <div>
                                <span>Cooking</span>
                            </div>
                            <div className="blog_content_date">
                                <span>March 19, 2022</span>
                            </div>
                        </div>

                        <div className="blog_content_title">
                            <div>
                                <h2>The Most Popular Delicious Food of Mediterranean Cuisine</h2>
                            </div>
                            
                            <div>
                                <span>
                                    Strategies on low-hanging fruit to identify a ballpark 
                                    value added matrix economically and the creative activity 
                                    to beta test override the food quality.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;