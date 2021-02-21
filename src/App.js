import React from "react";
import Dropdown from "./Dropdown";
import Chosen from "./Chosen";

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Dropdown />
                <Chosen />
            </div>
        )
    }
}

export default App