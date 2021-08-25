import React, { useState, useEffect } from "react";
import { db } from "../firebase/core";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { Link } from "react-router-dom";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);
      let docs = []
      querySnapshot.forEach(doc => {
        docs.push({ id: doc.id, ...doc.data() })
      });
      setArticles(docs);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <ul>
        {
          articles.map(article => (
            <li key={article.id}>
              <Link to={`article/${article.id}`}>{article.content.slice(0, 20)}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ArticleList;