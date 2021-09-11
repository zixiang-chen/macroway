import React from "react";
import { Link } from "react-router-dom";


const ArticleCard = ({ article }) => {
  const { id, title, createdAt } = article;
  const dateTime = new Date(createdAt.seconds * 1000).toISOString();
  const ymd = dateTime.substr(0, 10);
  const hms = dateTime.substr(11, 8);

  return (
    <div className="p-4 rounded bg-gray-100 bg-opacity-30 border-l-2 border-blue-400">
      <div className="prose">
        <h3><Link to={`/article/${id}`}>{title}</Link></h3>
      </div>
      <p className="mt-4 text-right text-sm text-gray-400">
        <span className="border-t">{ymd} {hms}</span>
      </p>
    </div>
  );
}

export default ArticleCard;
