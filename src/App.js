import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App=()=>(
  <>
  <h1 className="heading_style">List of top 5 Netflix Series</h1>
 {/* by fat Arrow functio */}


 {Sdata.map((value,index)=>{                      //all data from index.js paste here 
       // console.log(index);
        return <Card 
        key={value.id}
        imgsrc={value.imgsrc}
        title={value.title}
        sname={value.sname}
        link={value.link} />
      })}
    
   
    </>
  

);

export default App;


