import { useState } from "react";
import "./product.css";


const Product = ({img,link , projectname , discription, videolink}) => {
  const [readmore, setreadmore] = useState(false);
  const toggle = ()=> {

    readmore ?setreadmore(false): setreadmore(true);
  }
  

  return (
    <>
    <div className="main">
    <div className="p">
      <div className="project-name">
      <p className="project-name-text">{projectname}</p>
      </div>
      
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
    <div className="discription">
      <p>{ readmore ?
      discription : discription.substr(0 , 150)
      }</p>
      
    </div>
    <div className="buttondiv">
    <button className="button333" onClick={toggle} >{readmore? "Read less" : "Read more"}</button>
    
    <a className="test" href="https://www.youtube.com/channel/UCZwZO0248VoV5gaJIjPCexA">Video Demo</a>
    
    </div>
    </div>
    </>
  );
};

export default Product;
