import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, []);

    // console.log(friends);

    return (
        <div>
            <h2>Hello Friends. How are you?</h2>
            <p><small>Parle kisu taka dis</small> total friends: {friends.length}</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;