import React from "react";

function Dropdown(props) {
    return (
        <div>
        <select onChange={props.onChoose}>
            <option value="">Choose Destination</option>
            <option value="Canada">Canada</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="New Zealand">New Zealand</option>
        </select>
        </div>

    )
}

export default Dropdown;