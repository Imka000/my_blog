import React from 'react';
import MyButton from "./MyButton";
import posts from "../data/posts";

const Post = (props) => {
    return (
        <>
            <div className="w3-card-4 w3-margin w3-white">
                <img src={props.img} alt="" style={{width: '100%'}}/>
                <div className="w3-container">
                    <h3><b>{props.title}</b></h3>
                    <h5>{props.title_desc}, <span className="w3-opacity">{props.created_date}</span></h5>
                </div>
                <div className="w3-container">
                    <p>{props.desc}</p>
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <MyButton/>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span
                                className="w3-tag">{props.count_comments}</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default Post;