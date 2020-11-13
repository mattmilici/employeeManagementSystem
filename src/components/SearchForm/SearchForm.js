import React, { useState } from "react";
import Table from "../../components/Table/index"



function SearchForm() {

    const InitalState = {
        search: "",
        results: []
    };

    const [state, setState] = useState(InitalState)

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setState({
            [name]: value
        });
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(state.search);
        setState({
            search: ""
        });
    };

    return (
        <div className="">
            <form class="text-center m-auto w-25">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Search Bar</label>
                <input onChange={handleInputChange}
                    value={state.search}
                    onChange={handleInputChange}
                    name="search"
                    type="text"
                    className="form-control w-1/2"
                    placeholder="Search for an employee"
                    id="search" />
                <button onClick={handleFormSubmit} className="mt-10 py-10" type="button">Clear Filter</button>
            </form >
            <Table search={state.search}></Table>
        </div >
    );

}

export default SearchForm;