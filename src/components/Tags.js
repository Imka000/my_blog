import React from 'react';

const ItemsTags = (props) => {
    return (
            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">{props.tag}</span>
    )
}

const Tags = () => {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                    <ItemsTags
                        tag="New York"
                    />
                    <ItemsTags
                        tag="London"
                    />
                    <ItemsTags
                        tag="IKEA"
                    />
                    <ItemsTags
                        tag="NORWAY"
                    />
                    <ItemsTags
                        tag="DIY"
                    />
                    <ItemsTags
                        tag="Ideas"
                    />
                    <ItemsTags
                        tag="Baby"
                    />
                    <ItemsTags
                        tag="Famly"
                    />
                    <ItemsTags
                        tag="News"
                    />
                    <ItemsTags
                        tag="Clothing"
                    />
                    <ItemsTags
                        tag="Shopping"
                    />
                    <ItemsTags
                        tag="Sports"
                    />
                    <ItemsTags
                        tag="Games"
                    />
                </p>
            </div>
        </div>
    );
};

export default Tags;