import React, { Component } from 'react'

class Buttons extends Component {

    static defaultProps = {
        colors: ["#27ae60", "#8e44ad", "#f1c40f", "#1abc9c", "#e84393", "#d63031"]
    }

    constructor(props) {
        super(props);
        this.state = {
            color: "#e84393"
        }
    }

    changeBgColor = (newColor) => {
        this.setState({ color: newColor })
    }
    render() {
        return (
            <div className="buttons" style={{ background: this.state.color }}>
                <h1 className="heading">Change background color</h1>
                {
                    this.props.colors.map((color) => {
                        const colorOBJ = { backgroundColor: color };
                        return <button onClick={() => this.changeBgColor(color)} style={colorOBJ}>Change Color</button>
                    })
                }
            </div>
        )
    }
}
export default Buttons;