import React from "react";

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            chosen: event.target.value
        })
    }

    render() {
        return (
            <div>
            <select onChange={this.handleChange}>
                <option value="">Choose Destination</option>
                <option value="Canada">Canada</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="New Zealand">New Zealand</option>
            </select>
            <p>{this.state.chosen}</p>
            </div>

        )
    }
}

export default Dropdown;