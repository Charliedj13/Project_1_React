import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Homepage, Aboutme, Portfolio, Header, Footer} from "./components";


const App = () => {
    return (
        <BrowserRouter>
    <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </div>
        <Footer/>
    </BrowserRouter>
)}

const appElt = document.getElementById("app");
const root = createRoot(appElt)
root.render(<App />)






