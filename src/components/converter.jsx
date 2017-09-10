import React from "react";
import jsonToGoMap from "../lib/jsonToGoMap";

export default class Converter extends React.Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this);
        this.state = {
            result: "" 
        }
    }

    onChange(event){
        let result = jsonToGoMap(event.target.value);
        this.setState({
            result
        });
    }

    render() {
        return (
            <div className="result-panel">
                <textarea placeholder="Past your JSON here"
                    onChange={this.onChange}
                    className="text-box" />
                <div className="text-box">
                    <pre>{this.state.result}</pre>
                </div>
            </div>
        )
    }
}