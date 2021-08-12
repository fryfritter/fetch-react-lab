import React from "react";
import "./Article.css";

const Article = ({ article }) => {
  console.log(article);

  return (
    <div className="article_container">
      <div className="article_author">
        {article.author ? article.author : "Anonymous"}
      </div>
      <div className="article_content">{article.content}</div>
      <br />
    </div>
  );
};

export default Article;
