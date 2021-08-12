import React, { Component } from "react";
import Article from "../Article";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const URL = `https://newsapi.org/v2/everything?sources=hacker-news&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;
    // TODO: start coding!
    try {
      let response = await fetch(URL);
      // console.log(response.json());
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let arrArticles = jsonResponse.articles;
      console.log(arrArticles);

      this.setState({ articles: arrArticles });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return this.state.articles.map((article, i) => {
      // TODO: start coding!
      return (
        <Article article={article} />
        // <li key={i}>
        //   {article.author ? article.author : "Anonymous"} <br />
        //   {article.content}
        // </li>
      );
    });
  }
}

export default NewsFeed;
