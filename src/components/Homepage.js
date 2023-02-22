import React from "react"
import photo from "../me.png"

const Homepage = () => {
    return (
    <div>
        {/* <header id="header">
            <h3>
                Charles Jenkins
            </h3>
            <h3>
            Creativity, Dedication, Excellence
        </h3>
        </header> */}
        {/* <nav id="links">
                <button id="index-button"><a href="index.html">Home</a></button>
                <button id="about-button"><a href="about.html">About</a></button>
                <button id="portfolio-button"><a href="portfolio.html">Portfolio</a></button>
            </nav> */}
        <img id="mephoto" src={photo}></img>
        <p id="priority">
        Determined to deliver the finest custom websites for individuals and companies across the globe.
        </p>
        <div>
                <div id="mj">
                <img src="https://awfulannouncing.com/wp-content/uploads/sites/94/2020/05/jordan_98Game6.png" alt="Michael Jordan"/>
            </div>
            <p id="quote">
                Some people want it to happen, some wish it would happen, others make it happen. - Michael Jordan
            </p>
            <footer id="socials">
        <div> <a href="https://www.instagram.com/charlie.jenkinss/"><img class="test" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/480px-Instagram_icon.png"/></a></div>
       <div> <a href="https://www.linkedin.com/"><img class="test" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a></div>
        <div> <a href="https://www.facebook.com/charlie.jenkins.73997/"><img class="test" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/></a></div>
    </footer>
          </div> 
        
        
    </div>
)}
export default Homepage;

    
