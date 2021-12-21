import React from "react";
import Heading  from "./Heading";
import Images from "./Images";


    function Cards(props){
        return(
        <div className="cards">
            <div className="card">
                {/* <img src={props.imgsrc} alt="myPic" className="card_img"/> */}
                <Images imgsrc={props.imgsrc}/>

                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    {/* <h3 className="card_title">{props.sname}</h3> */}
                    <Heading  sname={props.sname}/>
                
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        );


    //    return (

    //    <>
    //    <h2>helooooo</h2>
    //    <h1>Hello and welcome buddy</h1>
    //    </>
    //    );
    }
 export default Cards;