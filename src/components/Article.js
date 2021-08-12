import React from "react";
import "./Article.css";
import Counter from "./Counter";

const Article = ({ article }) => {
  console.log(article);

  return (
    <div>
      <Counter />
      <div className="article_container">
        <div className="article_title">{article.title}</div>

        <div className="article_author"></div>
        <div className="article_content">{article.content}</div>
        <br />

        <div className="article_footer">
          published at :{" "}
          {new Date(Date.parse(article.publishedAt)).toLocaleString()} by :
          {article.author ? " " + article.author : " Anonymous"}
        </div>
      </div>
    </div>
  );
};

export default Article;
