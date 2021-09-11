import React from "react";
import ArticleList from "../components/ArticleList";
import Bulletin from "../components/Bulletin";


const Blog = () => {
  return (
    <div className="flex justify-between">
      <main className="w-8/12 mr-4">
        <ArticleList />
      </main>
      <aside className="w-4/12 ml-4">
        <Bulletin />
      </aside>
    </div>
  );
}

export default Blog;