import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <div>
            <header id="header">
                <h3>
                    Charles Jenkins
                </h3>
                <h3>
                    Creativity, Dedication, Excellence
                </h3>
            </header>
            <div id="links">
                <Link to="/"><div className="link">Homepage</div></Link>
                <Link to="/portfolio"><div className="link">Portfolio</div></Link>
                <Link to="/aboutme"><div className="link">About Me</div></Link>
                
            </div>
        </div>
    )
}
export default Header