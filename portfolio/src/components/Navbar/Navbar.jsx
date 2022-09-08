import "./Navbar.css"

export default function Navbar( {menuOpen, setMenuOpen}) {
  return (
    <div className={"Navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#hero" className="logo">
            vm.
          </a>
          </div>
         
          <div className="itemContainer">
            <a href=" https://www.linkedin.com/in/vaishali7/" className="linkedin">
            <img src="/VM-portfolio/assets/linkedin.svg" alt="clickable linkedin icon"/></a>
           
            <a href="mailto:vaishalimehmi.co.uk" className="email">
            <img src="/VM-portfolio/assets/email.svg" alt="clickable email icon"/></a>
          
           
            </div>
       
        <div className="right">
          <div className="hamburger" onClick= {()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      </div>
  )
}
