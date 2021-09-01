import React, { useState, useContext } from "react";
import { userContext } from "../util";
import Editor from "../components/Editor";
import ArticleList from "../components/ArticleList";


const Blog = () => {
  const userObj = useContext(userContext);
  const [editable, setEditable] = useState(false);
  const toggleEditor = e => {
    setEditable(!editable);
  }

  return (
    <div>
      <div>
        {
          (userObj != null) ? (
            editable ? (
              <Editor userId={userObj.uid} onCancel={toggleEditor} />
            ) : (
              <button onClick={e => { toggleEditor(e) }} > Create</button>
            )
          ) : (null)
        }
      </div>
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default Blog;