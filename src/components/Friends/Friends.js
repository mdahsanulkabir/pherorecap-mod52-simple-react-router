import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, []);

    console.log(friends);

    return (
        <div>
            <h2>Hello Friends. How are you?</h2>
            <p><small>Parle kisu taka dis</small> total friends: {friends.length}</p>
        </div>
    );
};

export default Friends;