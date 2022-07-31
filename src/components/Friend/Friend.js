import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    let navigate = useNavigate();
    const showFriendDetail = () => {
        navigate(`/friend/${id}`);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showFriendDetail}>{username} : Friend Id - {id}</button>
        </div>
    );
};

export default Friend;