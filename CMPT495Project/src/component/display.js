import React from "react";
import PropTypes from "prop-types";
import "./display.css";

class display extends React.Component {
    render() {
        return (
            <div className="component-display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}
display.propTypes = {
    value: PropTypes.string,
};
export default display;