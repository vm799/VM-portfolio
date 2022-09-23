import { useState, useEffect } from "react"
import PortfolioList from "../PortfolioList/PortfolioList"
import "./Portfolio.css"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    
}   from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data,setData] = useState([])

    const list = [
        {
            id: "featured",
            title:"Featured",
        },
        {
            id: "web",
            title:"UX",
        },
       
        {
            id: "mobile",
            title:"Mobile",
        },
        {
            id: "design",
            title:"Project Javascript",
        },
      

    ]

    useEffect(()=>{
switch(selected){
    case "featured" : 
    setData(featuredPortfolio)
    break;
    case "web" : 
    setData(webPortfolio)
    break;
    case "mobile" : 
    setData(mobilePortfolio)
    break;
    case "design" : 
    setData(designPortfolio)
    break;
    
    default:
        setData(featuredPortfolio);
}
    }, [selected])

  return (
    <div className="Portfolio" id="portfolio">
       <h1> Portfolio</h1>
           <ul>
               {list.map((item)=>(
                   <PortfolioList 
                   title={item.title} 
                   active={selected === item.id}
                   setSelected={setSelected}
                   id={item.id}
                   />
               ))}
           </ul>
           <div className="container">
               {data.map((data)=>(
                <div className="item">
                  <a href={data.web}> 
                  <img
                   src={data.img}
                   alt=""
                   /> </a>
                  
                   <h3>{data.title}</h3>
                  
               </div>
               ))}
               
             </div>
           </div>
      
  )
}
