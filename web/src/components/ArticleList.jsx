import React, { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase/core";
import { CONTENT_TYPE } from "../util";
import PostCard from "./PostCard";
import ArticleCard from "./ArticleCard";
import { LOCAL_ARTICLES } from "../util";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      let docs = [];
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        docs = [...docs, { ...doc.data(), id: doc.id }]
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
              <div className="w-full mx-auto pb-12">
                {
                  (article.type == CONTENT_TYPE.POST) ? (
                    <PostCard post={article} />
                  ) : (
                    <ArticleCard article={article} />
                  )
                }
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ArticleList;