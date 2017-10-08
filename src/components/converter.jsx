import React, { PureComponent } from "react";
import jsonToGoMap from "../lib/jsonToGoMap";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Converter extends PureComponent {
  state = {
    result: "",
    copied: false
  };

  onChange = ({ target: { value } }) => {
    let result = jsonToGoMap(value);
    this.setState({
      result
    });
  };

  render() {
    return (
      <div className="result-panel">
        <textarea
          placeholder="Paste your JSON here"
          onChange={this.onChange}
          className="text-box"
        />
        <div className="text-box">
          <pre>{this.state.result}</pre>
          {this.state.result ? (
            <CopyToClipboard
              text={this.state.result}
              onCopy={() => this.setState({ copied: true })}
            >
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
          ) : (
            false
          )}
          {this.state.copied ? (
            <span style={{ color: "red" }}>Copied.</span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Converter;
