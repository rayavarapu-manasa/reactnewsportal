import React from "react";
import image from '../assets/download.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light h-100">
      <img
        src={src?src:image}
        className="card-img-top"
        alt="News"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"NewsCatcher's News API makes this a reality, offering comprehensive coverage that spans 70,000 sources across all 195 countries, published in 55 languages. This unparalleled access to worldwide news sources ensures that you're not just informed, but globally enlightened." }</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
