import { Component } from "react";

class First extends Component {

    constructor() {
        super();

        this.state = {
            sname: "Varshith",
            sno: "22WJ1A05A0",
            counter: 0
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    render() {
        return (
            <div>
                <label>Counter : </label>
                {this.state.counter}

                <button type="button" onClick={this.increment}>
                    +
                </button>
            </div>
        );
    }
}

export default First;