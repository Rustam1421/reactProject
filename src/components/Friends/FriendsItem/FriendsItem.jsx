import React from 'react';

const FriendsItem = ({name, src}) => {
    return (
        <div>
            <div>
                <img src={src} alt=""/>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FriendsItem;