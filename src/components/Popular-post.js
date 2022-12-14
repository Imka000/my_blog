import React from 'react';

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
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <Item_posts
                        img="https://www.w3schools.com/w3images/workshop.jpg"
                        title="Lorem"
                        title_desc="Sed mattis nunc"
                    />
                    <Item_posts
                        img="https://www.w3schools.com/w3images/gondol.jpg"
                        title="Ipsum"
                        title_desc="Praes tinci sed"
                    />
                    <Item_posts
                        img="https://www.w3schools.com/w3images/skies.jpg"
                        title="Dorum"
                        title_desc="Ultricies congue"
                    />
                    <Item_posts
                        img="https://www.w3schools.com/w3images/rock.jpg"
                        title="Mingsum"
                        title_desc="Lorem ipsum dipsum"
                    />
                </ul>
            </div>
            <hr/>
        </>
    );
};


export default PopularPost;