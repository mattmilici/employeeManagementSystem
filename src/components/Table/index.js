import React from "react";
import FriendCard from "../FriendCard/index";
import TableHeader from "../TableHeader/TableHeader"
import friends from "../../friends.json";


function Table(props) {

    function checkName(friends) {
        return friends.name.includes(props.search);
    }

    function running(value) {
        console.log("test")
        console.log(value)
    }

    return (
        <table className="table-auto m-auto justify-content-center">
            <thead>
                <tr className="py-5">
                    <TableHeader onClick={running} > Name</TableHeader >
                    <TableHeader >Position</TableHeader>
                    <TableHeader >Location</TableHeader>
                    <TableHeader >Phone</TableHeader>
                </tr >
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
