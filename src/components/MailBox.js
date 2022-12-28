import React from 'react';
import posts from "../data/posts";

const MailBox = (props) => {
    return(
        <div>
            <h1>Hello!</h1>
            {
                unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages</h2>
            }
        </div>
    )
};

export default MailBox;