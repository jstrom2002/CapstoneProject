import React from "react";
import Display from "/compnent/Display";
import ButtonPanel from "/component/ButtonPanel";
import "/component/app.css";

class App extends React.Component {
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
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        );
    }
}
export default App;