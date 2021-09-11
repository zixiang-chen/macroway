import React, { useState, useEffect } from "react";
import { db } from "../firebase/core";
import { doc, getDoc } from "firebase/firestore";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";


const Article = () => {
  // 
  const { articleid } = useParams();
  // 
  const [loading, setLoading] = useState(true);
  const [atc, setAtc] = useState(null);
  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'articles', articleid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAtc(docSnap.data());
        setLoading(false);
      }
      else {
        // setLoading(false);
        console.log("No such article");
      }
    };
    fetchContent();
  }, []);

  return (
    <div>
      {
        loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <article className="prose max-w-none">
            <h1 className="text-center">{atc.title}</h1>
            <ReactMarkdown>{atc.content}</ReactMarkdown>
          </article>
        )
      }
    </div>
  );
}

export default Article;