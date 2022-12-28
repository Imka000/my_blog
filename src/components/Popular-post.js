import React from 'react';
import popular_posts from "../data/popular_posts";

const Item_posts = (props) => {
    return (
        <>
            <li className="w3-padding-16">
                <img src={props.img} alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}}/>
                <span className="w3-large">{props.title}</span><br/>
                <span>{props.title_desc}</span>
            </li>
        </>
    );
};

const PopularPost = () => {
    const items =  popular_posts.map((item,index) => {
        return (
            <Item_posts
                key={index}
                img={item.img}
                title={item.title}
                title_desc={item.title_desc}
            />
        )
    })

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {items}
                </ul>
            </div>
            <hr/>
        </>
    );
};


export default PopularPost;