import React from "react";

function TableHeader(props) {

    function test() {
        console.log(props.children)
    }
    return (
        <th onClick={test} className="px-4 py-2 bg-dark text-white">{props.children}</th>
    )
}
export default TableHeader;

