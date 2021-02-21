import React from "react";

function Dropdown(props) {
    return (
        <select>
            <option value="">Choose Destination</option>
            <option value="Canada">Canada</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="New Zealand">New Zealand</option>
        </select>
    )
}

export default Dropdown;