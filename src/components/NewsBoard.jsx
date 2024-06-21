import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchNews();
  }, [category, currentPage]); 

  const fetchNews = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${currentPage}&apiKey=${import.meta.env.VITE_API_KEY}`;
      if (category) {
        url += `&category=${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(data.articles);
      } else {
        console.error("Error fetching data:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(data.articles);
        setCurrentPage(1); // Reset to first page after search
      } else {
        console.error("Error fetching data:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-success">News</span> Portal
      </h2>
      <SearchBar onSearch={handleSearch} />
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
