import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Title from "./Title/title";
import Characters from "./Characters/characters";

function App () {
    return(
        <div className="App">
            <Title/>
            <Routes>
                <Route exact path="/" element component={Characters}/>
            </Routes>
        </div>
    )
}

export default App;