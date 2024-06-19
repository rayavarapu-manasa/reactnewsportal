import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of articles per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${currentPage}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, [category, currentPage]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-success">News</span> Portal
      </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {articles.map((news, index) => (
          <div key={index} className="col">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
    </div>
  );
};

export default NewsBoard;

