import React, { PureComponent } from "react";
import jsonToGoMap from "../lib/jsonToGoMap";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Converter extends PureComponent {
    state = {
        copied: false,
        isResultValid: false,
        result: ""
    };

    onChange = ({ target: { value } }) => {
        const result = jsonToGoMap(value);
        const isResultValid = !result.match(/Unexpected/i);

        this.setState({
            copied: false,
            isResultValid,
            result
        });
    };

    setCopiedToTrue = () => this.setState({ copied: true });

    render() {
        const { copied, isResultValid, result } = this.state;

        return (
            <div className="result-panel">
                <textarea
                    placeholder="Paste your JSON here"
                    onChange={this.onChange}
                    className="text-box"
                />
                <div className="text-box">
                    {result &&
                        isResultValid && (
                            <CopyToClipboard text={result} onCopy={this.setCopiedToTrue}>
                                <button>Copy to Clipboard</button>
                            </CopyToClipboard>
                        )}
                    {copied && <span className="copied-span">Copied!</span>}
                    <pre>{result}</pre>
                </div>
            </div>
        );
    }
}

export default Converter;
