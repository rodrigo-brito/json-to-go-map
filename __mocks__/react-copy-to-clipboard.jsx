import React from "react";

const CopyToClipboard = ({ children, onCopy, text }) => (
    <div onClick={() => onCopy(text)} >
        {children}
    </div>
);

module.exports = {
    CopyToClipboard
};
