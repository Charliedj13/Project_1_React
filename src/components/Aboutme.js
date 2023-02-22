import React from "react"

const Aboutme = () => {
    return (
    <div>
        {/* <header id="header">
        <h1>
            Charles Denver Jenkins
        </h1>
        <nav id="links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="portfolio.html">Portfolio</a>
        </nav>
    </header> */}
    <h2>
        A little about me...
    </h2>
        <h4 class="title1">
        I love to play basketball
        </h4>
        <section id="sec1">
            <img id="basketball" src="https://cdn.pixabay.com/photo/2017/04/25/05/44/basketball-2258650__480.jpg" alt="basketball"/>
            <span id="text1">
                <p class="text">
                    Ever since I was little I've had a basketball in my hands. I love to shoot around with friends and play pick-up at the local gym. The highlight of my high school experience was the bonding expreience I had with my basketball team.
                </p>
            </span>
    </section>
    <section id="sec2">
        <h4 class="title1">
        I love to Travel the world
        </h4>
        <div>
            <img id="travel" src="https://i.pinimg.com/originals/64/cc/29/64cc296da3bedfbcbba2c394458bcab9.jpg" alt="Travel photo"/>"
        </div>
        <div>
        <p class="text">
        Traveling is possibly my favorite thing to do. I absolutely love learning more about different cultures and building connections with new people across the country and world. Directly out of high school I took on the challenge of moving to Jamaica. I got to meet some incredible people and see some beautiful things I wouldn't otherwise have seen in the US. I love expanding my knowledge about the world through adventures.
        </p>
        </div>
        </section>

    <section id="sec3">
        <h4 class="title1">
         I love growing as a scholar
        </h4>
        <img id="scholar" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Black_and_White_Chessboard.jpg" alt="chessboard"/>
        <p class="text">
        I believe knowledge is power. In my spare time I love to play chess as it challenges my thinking and allows me to become better at planning and executing my next move. In school I pride myself on being able to learn very quickly and demonstrating a high level of effort and pride in my work. I also love to make rap beats for friends and rappers around the state of Colorado. I find it satisfying to create something people have never heard before.
        </p>
    </section>
    <footer id="socials">
        <div> <a href="https://www.instagram.com/charlie.jenkinss/"><img class="test" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/480px-Instagram_icon.png"/></a></div>
       <div> <a href="https://www.linkedin.com/"><img class="test" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a></div>
        <div> <a href="https://www.facebook.com/charlie.jenkins.73997/"><img class="test" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/></a></div>
    </footer>
    
    </div>
    
    )
}
export default Aboutme;