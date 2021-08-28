import React, { useState, useEffect } from "react";
import { db } from "../firebase/core";
import { doc, getDoc } from "firebase/firestore";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";


const Article = () => {
  // 
  const { articleid } = useParams();
  // 
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'articles', articleid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLoading(false);
        setContent(docSnap.data().content);
      }
      else {
        setLoading(false);
        setContent("No such document");
      }
    };
    fetchContent();
  }, []);

  return (
    loading ? (
      <div>
        <p>loading...</p>
      </div>
    ) : (
      <div className="">
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    )
  );
}

export default Article;