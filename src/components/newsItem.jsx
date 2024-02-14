import React from "react";
import news_image from "../assets/news_image.png"

const NewsItem = ({title , description , src , url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 py-2 px-2" style={{maxWidth:"345px"}}>
      <img src={src?src:news_image} style={{height:"200px",width:"320px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title?title.slice(0,50):"Bride Ira Khan does a headstand as part of wedding"}</h5>
        <p className="card-text">
          {description?description.slice(0,100):"With the Odisha Drivers’ Mahasangha joining the all India ‘Quit Steering Wheel’ movement called by t"}
        </p>
        <a href={url} className="btn btn-primary" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
