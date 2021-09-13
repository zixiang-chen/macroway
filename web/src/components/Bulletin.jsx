import React, { useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { readPolyfill, writePolyfill } from "../firebase/apis";
import { userContext } from "../util";
import Editor from "./Editor";
import { addArticle } from "../firebase/apis";


const Bulletin = () => {
  const userObj = useContext(userContext);
  const [editing, setEditing] = useState(false);
  const [bulletin, setBulletin] = useState('');
  useEffect(() => {
    readPolyfill('bulletin').then(data => {
      setBulletin(data);
    });
  }, [editing]);
  // 
  const handleSubmit = async (title, content) => {
    const article = {
      title: title || "BullETin",
      content,
      authorId: userObj.uid
    }
    await writePolyfill('bulletin', article);
    await addArticle(article);
    // 
    setEditing(false);
  };

  return (
    <div>
      {
        editing ? (
          <div>
            <Editor article={bulletin} onSubmit={handleSubmit} />
          </div>
        ) : (
          <div className="p-2 bg-red-50 prose max-w-none">
            <ReactMarkdown>{bulletin.content}</ReactMarkdown>
          </div>
        )
      }
      {
        userObj ? (
          <div className="text-right">
            <button className=""
              type="button" onClick={e => { setEditing(!editing) }}>
              edit
            </button>
          </div>
        ) : null
      }
    </div>
  );
}

export default Bulletin;