import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";
import "./components/Homepage.css"
import Mission from "./components/Mission";
import "./components/Mission.css";
import Quote from "./components/Quote";
import "./components/Quote.css"

const MainComponent = () => {
    return (
    <div>
        <Homepage />
        <Mission />
        <Quote />
    </div>
)}


let appElement = document.getElementById("app")
ReactDOM.render(<MainComponent />, appElement)






