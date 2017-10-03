import React from "react";
import jsonToGoMap from "../lib/jsonToGoMap";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Converter extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.state = {
            result: "",
            copied: false,
        }
    }

    onChange(event) {
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
                    {this.state.result ? <CopyToClipboard text={this.state.result}
                    onCopy={() => this.setState({ copied: true })}>
                    <button>Copy to Clipboard</button>
                </CopyToClipboard> : false}
                 {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null} 
                </div>
            </div>

        );
    }
}