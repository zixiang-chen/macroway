import React from "react";
import ReactMarkdown from "react-markdown";


const ArticleViewer = ({ article }) => {
  return (
    <div>
      <article className="prose max-w-none">
        <h1 className="text-center">{article.title}</h1>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </article>
    </div>
  );
}

export default ArticleViewer;