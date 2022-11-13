import "./Testimonials.css"

export default function Testimonials() {
  const data = [
    {
      key:1,
      id: 1,
      name: "Madan Raj Rajagopal",
      title: "Founder & CEO, Ludimos",
      img:"assets/maddy.png",
      icon: "assets/twitter.png",
      desc:         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",

   },
    {
      key:2,
      id: 2,
      name: "Suzanne Lambert",
      title: "Chair & Trustee, DODI Development Initiative",
      img: "https://i0.wp.com/dodi.org.uk/wp-content/uploads/2021/07/5.-Suzanne-Lambert-1.jpg?resize=768%2C576&ssl=1",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        featured: true,
    },
    {
      key:3,
      id: 3,
      name: "Peter Mitchell",
      title: "Clinical Manager, NHS Homerton Hospital",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        
    },
  ];

  return (
    <div className='Testimonials' id="testimonials">
       <h1>Testimonials</h1> 

       <div className="main-testimonial">

 <div className= "card">
 <div className="top">


<img className="user"
    src="VM-Portfolio/assets/maddy.png"
    alt="profile pic" />



 </div>
 
 <p className="center top">
 Vaishali was involved in designing a couple of interfaces at Ludimos. 
</p>
<p className="center middle">
 Being a cricket coach and a UX expert, she was able to quickly understand the requirements I had and came up with very well thought user journeys. 
</p>
<p className="center bottom">
 She was extremely proactive and she dived into several other aspects of the design, which weren't even a part of my requirement. 
</p>

<p className="center lowest">
She was motivated, energetic and lovely to work with. I wish her all the very best for her future endeavors.
</p>

 <div className=" bottom">
   <h3>Madan Raj Rajagopal</h3>
   <h4>Founder & CEO, Ludimos</h4>
 </div>
</div>



        
       </div>

       <div className="container">
{data.map((data)=>(
 <div className={data.featured ? "card featured" : "card"}>
 <div className="top">
{/* <img className="left"
src="assets/arrowright.png" alt="" /> */}

<img className="user"
    src={data.img}
    alt="profile pic" />
{/* <img className="right"
src={data.icon} alt="right arrow" /> */}


 </div>
 <div className="center">
   {data.desc}</div>

 <div className="bottom">
   <h3>{data.name}</h3>
   <h4>{data.title}</h4>
 </div>
</div>

))}

        
       </div>
        </div>
  )
}
