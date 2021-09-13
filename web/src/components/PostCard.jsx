import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { deleteArticle } from "../firebase/apis";


const PostCard = ({ post }) => {
  const { content, createdAt } = post;
  const dateTime = new Date(createdAt.seconds * 1000).toISOString();
  const ymd = dateTime.substr(0, 10);
  const hms = dateTime.substr(11, 8);
  // 
  const [existence, setExistence] = useState(true);
  const onDelete = () => {
    deleteArticle(post.id)
      .then(value => {
        setExistence(false);
      });
  }

  return (
    existence ? (
      <div className="p-4 rounded bg-blue-50 bg-opacity-30">
        <div className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <p className="mt-4 text-right text-sm text-gray-400">
          <button className='mr-4' type='button'
            onClick={onDelete}
          >delete</button>
          <span className="border-t">{ymd} {hms}</span>
        </p>
      </div>
    ) : null
  );
}

export default PostCard;
