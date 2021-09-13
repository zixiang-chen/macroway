import React, { useState, useEffect } from "react";
import { fetchArticle } from "../firebase/apis";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ArticleViewer from "../components/ArticleViewer";
import { useHistory } from "react-router-dom";
import { deleteArticle } from "../firebase/apis";


const Article = () => {
  const { articleid } = useParams();
  // 
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetchArticle(articleid).then(data => {
      setArticle(data);
      setLoading(false);
    });
  }, []);
  // 
  const history = useHistory();
  const onDelete = () => {
    deleteArticle(articleid)
      .then(value => {
        history.push('/');
      });
  }

  return (
    <div>
      {
        loading ? (
          <Spinner />
        ) : (
          <div>
            <ArticleViewer article={article} />
            <div className='text-right'>
              <button onClick={onDelete}>delete</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Article;