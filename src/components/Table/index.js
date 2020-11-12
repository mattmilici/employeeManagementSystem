import React, { useState } from "react";
import FriendCard from "../FriendCard/index";
import friends from "../../friends.json";


function Table(props) {
    console.log(props.search)

    function checkName(friends) {
        return friends.name.includes(props.search)
    }
    return (
        <table class="table-auto m-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Position</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    friends.filter(checkName).map(friend => (
                        <FriendCard
                            id={friend.id}
                            key={friend.id}
                            name={friend.name}
                            phone={friend.phone}
                            position={friend.position}
                            location={friend.location}
                        />
                    ))}
            </tbody>
        </table>
    )
}

export default Table;
