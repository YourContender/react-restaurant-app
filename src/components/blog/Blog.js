import { blog } from '../../data';
import './Blog.scss';

const Blog = () => {

    console.log(blog);
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
                {
                    blog.map(item => {
                        return (
                            <div className="blog_content_item">
                                <div>
                                    <img src="https://i.pinimg.com/564x/b2/06/c4/b206c4964db8699d123b4b6e7ff34d05.jpg" alt="blog logo" />
                                    <button>{item.textBtn}</button>
                                </div>
            
                                <div>
                                    <div className="blog_content_subtitle">
                                        <div>
                                            <span>{item.tag}</span>
                                        </div>
                                        <div className="blog_content_date">
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
            
                                    <div className="blog_content_title">
                                        <div>
                                            <h2>{item.title}</h2>
                                        </div>
                                        
                                        <div>
                                            <span>
                                                {item.descr}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog;