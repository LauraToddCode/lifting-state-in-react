import React from "react";
import Dropdown from "./Dropdown";
import Chosen from "./Chosen";

class App extends React.Component {
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

    render () {
        return (
            <div>
                <Dropdown onChoose={this.handleChange} />
                <Chosen choice={this.state.chosen} />
            </div>
        )
    }
}

export default App