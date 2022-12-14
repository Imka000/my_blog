import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import PopularPost from "./components/Popular-post";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Post from "./components/Post";
import "./styles/index.css";
import posts from "./data/posts";

const MyBlogContent = () => {
    const postsItems = posts.map((item)=> {
        return(
            <Post
                img={item.img_url}
                title={item.title}
                title_desc={item.title_desc}
                created_date={item.created_date}
                desc={item.desc}
                count_comments={item.count_comments}
            />

        )
    })

    return(
        <>
            <div className="w3-content" style={{maxWidth: '1400px'}}>
                <Header/>
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        {postsItems}
                    </div>
                    <div className="w3-col l4">
                        <About/>
                        <PopularPost/>
                        <Tags/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

const App = () => {
    return <MyBlogContent/>
};

export default App;