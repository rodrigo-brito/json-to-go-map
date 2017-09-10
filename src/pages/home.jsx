import React from "react";
import Converter from "../components/converter";

export default function(){
    return (
        <main className="main-content">
            <header>
                <div className="intro">
                    <h1>JSON to Golang Map</h1>
                    <h2>Convert JSON to Golang Map Interface</h2>
                    <p>
                        This tool instantly converts JSON into a Go Interface Map representation. Paste a JSON structure on the left and the equivalent Go type will be generated to the right, which you can paste into your program. This tool was inspired on <a href="https://github.com/mholt/json-to-go">Json to Go</a> by Matt Holt.
                    </p>
                </div>
                <div className="info-editor grid text-center">
                    <div className="col-5">JSON</div>
                    <div className="col-2 xl">&#8594;</div>
                    <div className="col-5">Go Map</div>
                </div>
            </header>
            <Converter />
            <footer className="text-center">
                &copy; 2017 Rodrigo Brito - <a href="https://github.com/rodrigo-brito/json-to-go-map">View on GitHub</a> - Made with ❤ in Brazil
            </footer>
        </main>
    )
}