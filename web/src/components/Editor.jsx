import React, { useState } from "react";
import { db } from "../firebase/core";
import { collection, addDoc, Timestamp } from "firebase/firestore";


const Editor = () => {
  const [markdown, setMarkdown] = useState("");
  const [notif, setNotisf] = useState("")
  const onTextChange = e => {
    setMarkdown(e.target.value);
  }
  const onPost = async (e) => {
    try {
      const docRef = await addDoc(collection(db, 'articles'), {
        content: markdown,
        createdAt: Timestamp.now()
      });
      setNotisf(`Successful posted an article with id=${docRef.id}`);
    } catch (err) {
      setNotisf(`${err.message}`);
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="post-title">Title</label>
          <input type="text" id="post-title" />
        </div>
        <div>
          <label htmlFor="post-content">Content</label>
          <textarea id="post-content" className=""
            value={markdown} onChange={(e) => onTextChange(e)}
          >
          </textarea>
        </div>
        <div>
          <button type="button" onClick={e => { onPost(e) }}>Post</button>
        </div>
      </form>
      <p>{notif}</p>
    </div>
  );
}

export default Editor;