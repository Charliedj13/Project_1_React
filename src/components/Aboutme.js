
import "./Aboutme.css"

const Aboutme = () => {
    return (
    <div>
        <h2>
            A little about me...
        </h2>
        <h4 className="title1">
        I love to play basketball
        </h4>
        <div className="sec1">
            <img id="basketball" src="https://cdn.pixabay.com/photo/2017/04/25/05/44/basketball-2258650__480.jpg" alt="basketball"/>
            <span id="text1">
                <p className="text">
                    Ever since I was little I've had a basketball in my hands. I love to shoot around with friends and play pick-up at the local gym. The highlight of my high school experience was the bonding expreience I had with my basketball team.
                </p>
            </span>
    </div>
    <section id="sec2">
        <h4 className="title1">
        I love to Travel the world
        </h4>
        <div className="sec1">
        <div>
            <img id="travel" src="https://i.pinimg.com/originals/64/cc/29/64cc296da3bedfbcbba2c394458bcab9.jpg" alt="Travel photo"/>"
        </div>
        <div>
        <p className="text">
        I love learning more about different cultures and building connections with new people across the country and world. I've gotten to meet some incredible people and seen some beautiful things. I love expanding my knowledge about the world through adventures.
        </p>
        </div>
        </div>
        </section>

    <section id="sec3">
        <h4 className="title1">
         I love growing as a scholar
        </h4>
        <div className="sec1">
        <img id="scholar" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Black_and_White_Chessboard.jpg" alt="chessboard"/>
        <p className="text">
        I believe knowledge is power. In my spare time I love to play chess and to code because they both challenge my thinking and allow me to become better at planning ahead. In school I pride myself on being able to learn very quickly and demonstrating a high level of effort and pride in my work.
        </p>
        </div>
    </section>
    
    </div>
    
    )
}
export default Aboutme;