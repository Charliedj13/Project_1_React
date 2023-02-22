import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";
import "./components/Homepage.css"
import Aboutme from "./components/Aboutme"
import "./components/Aboutme.css";
import Portfolio from "./components/Portfolio"
import "./components/Portfolio.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const MainComponent = () => {
    return (
        <BrowserRouter>
    <div>
        <header id="header">
            <h3>
                Charles Jenkins
            </h3>
            <h3>
            Creativity, Dedication, Excellence
        </h3>
        </header>
        <nav id="links">
            <Link to="/">Homepage</Link>
            <Link to="/About-me">About Me</Link>
            <Link to="/Portfolio">Portfolio</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-me" element={<Aboutme />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
    </div>
    </BrowserRouter>
)}


let appElement = document.getElementById("app")
ReactDOM.render(<MainComponent />, appElement)






