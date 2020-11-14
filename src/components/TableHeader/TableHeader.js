import React from "react";

function TableHeader(props) {

    return (
        <th onClick={props.click} className="px-4 py-2 bg-dark text-white">{props.name}</th>
    )
}
export default TableHeader;

