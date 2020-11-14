import React, { useState } from "react";
import FriendCard from "../FriendCard/index";
import friends from "../../friends.json";


function Table(props) {


    const [state, setState] = useState({
        sortType: ""
    })


    function checkName(friends) {
        return friends.name.includes(props.search);
    }

    function compare(event) {
        console.log(event)
        console.log(event.target.innerHTML.toLowerCase())
        console.log("WORKING")
        setState({
            sortType: event.target.innerHTML.toLowerCase()
        })

        sort(state)
    }

    function sort(state) {
        console.log(state.sortType)
        friends.sort(function (a, b) {
            var textA = a[state.sortType];
            var textB = b[state.sortType];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
        console.log(friends)
    }


    return (
        <table className="table-auto m-auto justify-content-center">
            <thead>
                <tr className="py-5">
                    <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="name">Name</th>
                    <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="position">Position</th>
                    <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="location">Location</th>
                    <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="phone">Phone</th>
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





// import React from "react";
// import FriendCard from "../FriendCard/index";
// // import TableHeader from "../TableHeader/TableHeader"
// import friends from "../../friends.json";


// function Table(props) {

//     function checkName(friends) {
//         return friends.name.includes(props.search);
//     }

//     function compare(event) {
//         console.log(event.target.innerText.toLowerCase())
//         const testValue = event.target.innerText.toLowerCase()
//         friends.sort((a, b) => (a.testValue > b.testValue) ? 1 : -1)

//     }


//     return (
//         <table className="table-auto m-auto justify-content-center">
//             <thead>
//                 <tr className="py-5">
//                     <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="name">Name</th>
//                     <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="position">Position</th>
//                     <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="location">Location</th>
//                     <th onClick={compare} className="px-4 py-2 bg-dark text-white" value="phone">Phone</th>
//                 </tr>
//             </thead >
//             <tbody>
//                 {
//                     friends.filter(checkName).map(friend => (
//                         <FriendCard
//                             id={friend.id}
//                             key={friend.id}
//                             name={friend.name}
//                             phone={friend.phone}
//                             position={friend.position}
//                             location={friend.location}
//                         />
//                     ))}
//             </tbody>
//         </table >
//     )
// }

// export default Table;
