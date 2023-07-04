import "./AboutMe.css";

export default function AboutMe() {

    return(
        <div className="AboutMe" id="about-me">
        <div className="bio">
            <div className="bio-title"> 
            <h2>i love testing software and problem solving with <span>Java and Python</span>,</h2>
                 
            <h2>creating magic with frontend <span>CSS</span> and <span>Javascript</span>  </h2>
            <h2>
                and i absolutely adore cocker spaniels.</h2>
            </div>

            <div className="bio-body">
            <div className="bio-text">
            <span>  I am a graduate software developer </span>and UX experience designer. 
            I am a natural problem solver and am able to use my UX and coding knowledge to create great user experiences.</div>
            <div className="bio-text">
            <span>I love designing, building and testing </span> and I have a keen eye for fine detail & simple design.
            </div>
            
            </div>
        </div>
        </div>
    )
}