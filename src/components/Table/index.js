import React, { useState } from "react";
import FriendCard from "../FriendCard/index";
import friends from "../../friends.json";
import TableHeader from "../TableHeader/TableHeader"


function Table(props) {
    const [state, setState] = useState({
        sortType: "",

    })


    function checkName(friends) {
        return friends.name.includes(props.search);
    }

    function compare(event) {
        setState({
            sortType: event.target.innerHTML.toLowerCase()
        })
        friends.sort(function (a, b) {
            var textA = a[event.target.innerHTML.toLowerCase()];
            var textB = b[event.target.innerHTML.toLowerCase()];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    }

    return (
        <table className="table-auto m-auto justify-content-center">
            <thead>
                <tr className="py-5">
                    <TableHeader click={compare} name="Name"></TableHeader>
                    <TableHeader click={compare} name="Position"></TableHeader>
                    <TableHeader click={compare} name="Location"></TableHeader>
                    <TableHeader click={compare} name="Phone"></TableHeader>
                </tr>
            </thead >
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
        </table >
    )
}
export default Table;
