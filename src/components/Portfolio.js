import "./Portfolio.css"
import coffeclicker from "../coffeeclicker.png"
import craigslist from "../craigslist.png"
import cyberslice from "../cyberslice.png"
import puppybowl from "../puppybowl.png"
import tictactoe from "../tictactoe.png"
import fitnesstracker from "../Fitness-Tracker.png"

const Portfolio = () => {
    return (
        <div>
            <h2 id="title">
                Projects I've created
            </h2>
            <div className="section">
            <div className="portfolioheaders">
                <p className="projecttitle">
                    CyberSlice E-Commerce Pizza Parlor
                </p>
                <a href="https://github.com/capstone-project-team-tec/Cyberslice-Pizza-Project"><p className="linkto">Github Link to Code</p></a>
                <a href="https://cyberslice-frontend.onrender.com/"><p className="linkto">View Site Here</p></a>
                </div>
                <div className="imagetext">
                <img className="portfolioimg" id="cybersliceimg" src={cyberslice} alt="project"/>
                
                <p className="textportfolio">
                *Site may take some time to load, please be patient*
                    <p>Cyberslice is an interactive, cyberpunk themed E-Commerce Pizza Resteraunt. This group project was written in JavaScript using a React.js framework and includes the use of Express.js. This site took us about three weeks to create. The functionality of this site includes an interactive build-your-own pizza, a login/register page, a menu that includes all of our products, a locations page, a profile page to view order history and edit user info, cart functionality for a guest user and a user that is logged in, an admin page to delete/update users and products, etc. In addition to all of this we created our own API for this project.</p>
                 </p>
                 </div>
            </div>
            <div className="section">
            <div className="portfolioheaders">
                <p className="projecttitle">
                    Fitness Tracker
                </p>
                <a href="https://github.com/Worst-Pace-Scenario"><p className="linkto">Github Link to Code</p></a>
                <a href="https://splendorous-tiramisu-c9837c.netlify.app"><p className="linkto">View Site Here</p></a>
                </div>
                <div className="imagetext">
                <img className="portfolioimg" src={fitnesstracker} alt="project"/>
                <p className="textportfolio">
                    *Site functionality is currently not working due to Render allowing one deployment at a time!* 
                    <p>Fitness Tracker is an interactive, workout based app that allows you to add workouts to your routine. This group project was written in JavaScript using a React.js framework and includes the use of Express.js. This site took us one week to create. The functionality of this site includes the ability to create/delete a new routine, a login/register page, an option to view all activites and create a new one, add an activity to a routine, etc. We also created our own API for this project.</p>
                </p>
                </div>
            </div>
            <div className="section">
            <div className="portfolioheaders">
                <p className="projecttitle">
                    Stranger's Things
                </p>
                <a href="https://github.com/Charliedj13/Stranger-s-Things"><p className="linkto">Github Link to Code</p></a>
                <a href="https://kaleidoscopic-lollipop-0b9d50.netlify.app"><p className="linkto">View Site Here</p></a>
                </div>
                <div className="imagetext">
                <img className="portfolioimg" src={craigslist} alt="project"/>
                <p className="textportfolio">
                    Stranger's Things is a site comparable to Craigslist. This site was written in JavaScript using a React.js framework. This solo project took a week to build using a given API. The functionality of this site includes an option to view and search for any listing, view more details about a product, a login/register page, create/delete a product, view all listings created by the user, etc.
                </p>
                </div>
            </div>
            <div className="section">
                <div className="portfolioheaders">
                <p className="projecttitle">
                    Puppy Bowl
                </p>
                <a href="https://github.com/Charliedj13/puppy_bowl"><p className="linkto">Github Link to Code</p></a>
                <a href="https://deft-puffpuff-c33f2e.netlify.app"><p className="linkto">View Site Here</p></a>
                </div>
                <div className="imagetext">
                <img className="portfolioimg" src={puppybowl} alt="project"/>
                <p className="textportfolio">
                    Puppy Bowl was written in JavaScript using a React.js framework. This solo project took a week to build using a given API. The functionality of this project includes a list of all puppies competing, an option to view more details about each puppy, search for a puppy, etc.
                </p>
                </div>
            </div>
            <div className="section">
            <div className="portfolioheaders">
                <p className="projecttitle">
                    Coffee Clicker
                </p>
                <a href="https://github.com/Charliedj13/CoffeeClicker"><p className="linkto">Github Link to Code</p></a>
                <a href="https://tubular-mermaid-b2a146.netlify.app"><p className="linkto">View Site Here</p></a>
                </div>
                <div className="imagetext">
                <img className="portfolioimg" src={coffeclicker} alt="project"/>
                <p className="textportfolio">
                    Coffee Clicker is an interactive, passive income generating game. It was built using JavaScript, Vanilla-DOM manipulation. This solo project took a week to build. The functionality of this site includes the ability to click on a photo to generate one coffee, the ability to buy passive income more than once, etc.
                </p>
                </div>
            </div>
            <div className="section" id="coffeeclicker">
            <div className="portfolioheaders">
                <p className="projecttitle">
                    Tic Tac Toe
                </p>
                <a href="https://github.com/Charliedj13/Arcade-Project"><p className="linkto">Github Link to Code</p></a>
                <a href="https://kaleidoscopic-kitsune-d6cc38.netlify.app"><p className="linkto">View Site Here</p></a>
                </div>
                <div className="imagetext">
                <img className="portfolioimg" src={tictactoe} alt="project"/>
                <p className="textportfolio">
                    Tic-Tac-Toe was built using JavaScript, Vanilla-DOM manipulation. This solo project took a week to build. The functionality of this project includes an input to enter player's names, a random generator of player turn to start, the ability to click on a square to mark with an X or an O, recognizes any winning pattern, etc.
                </p>
                </div>
            </div>  
        </div>
    )
}
export default Portfolio;