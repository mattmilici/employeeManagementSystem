import React from "react";


function FriendCard(props) {
  return (
    <tr>
      <td class="border px-4 py-2">{props.name}</td>
      <td class="border px-4 py-2">{props.position}</td>
      <td class="border px-4 py-2">{props.location}</td>
      <td class="border px-4 py-2">{props.phone}</td>
    </tr>
  )
}

export default FriendCard;
