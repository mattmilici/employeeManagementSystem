import React, { Component } from "react";
import Table from "../../components/Table/index"


class SearchForm extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
        this.setState({
            search: ""
        });
    };

    render() {
        return (
            <div>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Search Bar</label>
                    <input onChange="{props.handleInputChange}"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        type="text"
                        className="form-control w-1/2"
                        placeholder="Search for an employee"
                        id="search" />
                    <button onClick={this.handleFormSubmit} className="" type="button">
                        Clear Filter
                          </button>
                </form>
                <Table search={this.state.search}></Table>
            </div>
        );
    }
}

export default SearchForm;
