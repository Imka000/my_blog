import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import PopularPost from "./components/Popular-post";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Post from "./components/Post";
import "./styles/index.css";
import posts from "./data/posts";
import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl";
import MailBox from "./components/MailBox";
import ActiveUser from "./components/ActiveUser";
import WarningPage from "./components/WarningPage";
import UserProfile from "./components/UserProfile";

const MyBlogContent = () => {
    let postsItems;
    if (posts.length > 0){
        postsItems = posts.map((item,index)=> {
                return(
                    <Post
                        key={index}
                        img={item.img_url}
                        title={item.title}
                        title_desc={item.title_desc}
                        created_date={item.created_date}
                        desc={item.desc}
                        count_comments={item.count_comments}
                    />
                )
            })
            } else{
                postsItems = <h2>Нет постов</h2>
        }

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

const App = () => <UserProfile/>

export default App;