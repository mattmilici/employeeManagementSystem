import React from "react";


function FriendCard(props) {
  return (
    <tr>
      <td className="border px-4 py-2">{props.name}</td>
      <td className="border px-4 py-2">{props.position}</td>
      <td className="border px-4 py-2">{props.location}</td>
      <td className="border px-4 py-2">{props.phone}</td>
    </tr>
  )
}

export default FriendCard;
