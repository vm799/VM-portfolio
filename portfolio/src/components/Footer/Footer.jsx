import "./Footer.css"

export default function Footer() {
  return (
    <footer class="footer">
    <div class="reveal container">
      <a href="#"> 
        <h3 class="footer__logo"><img src="VM-portfolio/assets/VMLogo3.png" alt="logo" ></img>
        </h3>
        
    </a>

      {/* <div class="footer__social">
        
        <a href="#">
           <i class="fab fa-brands fa-discord" 
           alt="discord">
             </i>JOIN US
        </a>
        
        <a href="#">
          <i class="fab 
          fa-brands fa-twitter" 
          alt="twitter">
            </i>FOLLOW US
        </a>
        
      </div> */}

      <div class="footer__links col1">
        <a href="#Hero">About Me</a>
        <a href="#Contact">Contact</a>
        
      </div>

      <div class="footer__links col2">
        <a href="https://www.linkedin.com/in/vaishali7/">LinkedIn</a>
        <a href="#Portfolio">My work</a>
      </div>

      {/* <div class="footer__cta">
        <a href="#" class="button">Request Invite</a>
      </div> */}

      
    </div>
   
    <div class="footer__copyright">
        &copy; Vaishali Mehmi. All Rights Reserved.
      </div>
    <div class="attribution">
      <a href="https://github.com/vm799">Coded by PinkPistachioButterfly</a>.
      
    </div>
  </footer>
  )
}


