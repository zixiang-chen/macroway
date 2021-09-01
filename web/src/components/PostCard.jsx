import React from "react";
import ReactMarkdown from "react-markdown";


const PostCard = ({ post }) => {
  const { content, createdAt } = post;

  return (
    <div>
      <ReactMarkdown className="text-2xl">{content}</ReactMarkdown>
      <p className="text-right">{createdAt.seconds}</p>
    </div>
  );
}

export default PostCard;
