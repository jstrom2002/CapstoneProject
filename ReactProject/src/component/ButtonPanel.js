import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="4" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="10" clickHandler={this.handleClick} />
                    <Button name="11" clickHandler={this.handleClick} />
                    <Button name="12" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="13" clickHandler={this.handleClick} />
                    <Button name="14" clickHandler={this.handleClick} />
                    <Button name="15" clickHandler={this.handleClick} />
                    <Button name="16" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="17" clickHandler={this.handleClick} />
                    <Button name="18" clickHandler={this.handleClick} />
                    <Button name="19" clickHandler={this.handleClick} />
                    <Button name="20" clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}
ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonPanel;