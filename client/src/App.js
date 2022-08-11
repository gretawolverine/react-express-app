import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
    const [apiResponse, setApiResponse] = useState("");
    const [dbResponse, setDbResponse] = useState("");

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then((res) => res.text())
            .then((res) => setApiResponse(res));
    };

    const callDB = () => {
        fetch("http://localhost:9000/testDB")
            .then((res) => res.text())
            .then((res) => setDbResponse(res))
            .catch((err) => err);
    };

    useEffect(() => {
        callAPI();
        callDB();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p className="App-intro">{`${apiResponse} GRETAAA CALL API `}</p>
                <p className="App-intro">{`${dbResponse} GRETA DB RESPONSE`}</p>
            </header>
        </div>
    );
};

export default App;
