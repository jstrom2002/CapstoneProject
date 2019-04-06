import React from "react";
import display from "./display";
import buttonPanel from "./buttonPanel";
import "./app.css";

class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = buttonName => {
        //do something here later
    };

    render() {
        return (
            <div className="component-app">
                <display value={this.state.next || this.state.total || "0"} />
                <buttonPanel clickHandler={this.handleClick} />
            </div>
        );
    }
}
export default app;