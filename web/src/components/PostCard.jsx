import React from "react";
import ReactMarkdown from "react-markdown";


const PostCard = ({ post }) => {
  const { content, createdAt } = post;
  const dateTime = new Date(createdAt.seconds * 1000).toISOString();
  const ymd = dateTime.substr(0, 10);
  const hms = dateTime.substr(11, 8);

  return (
    <div className="p-4 rounded bg-blue-50 bg-opacity-30">
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <p className="mt-4 text-right text-sm text-gray-400">
        <span className="border-t">{ymd} {hms}</span>
      </p>
    </div>
  );
}

export default PostCard;
