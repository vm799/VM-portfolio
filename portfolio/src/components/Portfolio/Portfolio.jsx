import { useState, useEffect } from "react"
import PortfolioList from "../PortfolioList/PortfolioList"
import "./Portfolio.css"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
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
            title:"Web App",
        },
       
        {
            id: "mobile",
            title:"Mobile",
        },
        {
            id: "design",
            title:"Design",
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
                   <img
                   src={data.img}
                   alt=""
                   />
                  
                   <h3>{data.title}</h3>
                  
               </div>
               ))}
               
             </div>
           </div>
      
  )
}
