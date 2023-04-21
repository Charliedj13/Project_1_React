import photo from "../me.png"
import "./Homepage.css"

const Homepage = () => {
    return (
    <div id="homepage">
        <img id="mephoto" src={photo}></img>
        <p id="priority">
        Determined to deliver the finest custom websites for individuals and companies across the globe.
        </p>
        <div>
                <div id="mj">
                <img id="mjpic"src="https://awfulannouncing.com/wp-content/uploads/sites/94/2020/05/jordan_98Game6.png" alt="Michael Jordan"/>
            </div>
            <p id="quote">
                Some people want it to happen, some wish it would happen, others make it happen. - Michael Jordan
            </p>
            
          </div> 
        
        
    </div>
)}
export default Homepage;

    
