import "./AboutMe.css";

export default function AboutMe() {

    return(
        <div className="AboutMe" id="about-me">
        <div className="bio">
            <div className="bio-title"> 
            <h2>i love problem solving, </h2>
            <h2>creating magic with code  </h2>
            <h2>& cocker spaniels.</h2>
            </div>

            <div className="bio-body">
            <div className="bio-text">
            <span>  I am a junior software developer, UX experience designer.</span> 
            I am a natural problem solver and am able to use my UX and coding knowledge to create a gret user experience.</div>
            <div className="bio-text">
            <span>I love building and designing,</span> I have a keen eye for fine detail & simple design.
            </div>
            {/* <div className="bio-text">
            <span>Studying the user's journey fills me with fascination </span>and a passion  to design and code more enjoyable and productive user experiences.
           </div> */}
            </div>
        </div>
        </div>
    )
}