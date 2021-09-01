import React from "react";


const ArticleCard = ({ article }) => {
  const { title } = article;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default ArticleCard;
