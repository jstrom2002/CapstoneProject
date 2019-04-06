import button from "./button";
import React from "react";
import PropTypes from "prop-types";
import "./buttonPanel.css";

class buttonPanel extends React.Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <button name="AC" clickHandler={this.handleClick} />
                    <button name="+/-" clickHandler={this.handleClick} />
                    <button name="%" clickHandler={this.handleClick} />
                    <button name="÷" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <button name="7" clickHandler={this.handleClick} />
                    <button name="8" clickHandler={this.handleClick} />
                    <button name="9" clickHandler={this.handleClick} />
                    <button name="x" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <button name="4" clickHandler={this.handleClick} />
                    <button name="5" clickHandler={this.handleClick} />
                    <button name="6" clickHandler={this.handleClick} />
                    <button name="-" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <button name="1" clickHandler={this.handleClick} />
                    <button name="2" clickHandler={this.handleClick} />
                    <button name="3" clickHandler={this.handleClick} />
                    <button name="+" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <button name="0" clickHandler={this.handleClick} wide />
                    <button name="." clickHandler={this.handleClick} />
                    <button name="=" clickHandler={this.handleClick} orange />
                </div>
            </div>
        );
    }
}
buttonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default buttonPanel;