import React, { useState } from "react";
import { db } from "../firebase/core";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { nanoid } from "nanoid";


const Editor = () => {
  const [markdown, setMarkdown] = useState("");
  const [notif, setNotif] = useState("")
  const onTextChange = e => {
    setMarkdown(e.target.value);
  }
  const onPost = async (e) => {
    const marked = require("marked");
    try {
      const docRef = await addDoc(collection(db, 'articles'), {
        id: nanoid(),
        content: marked(markdown),
        createdAt: serverTimestamp()
      });
      setNotif(`Successful posted an article with id=${docRef.id}`);
    } catch (err) {
      setNotif(`${err.message}`);
    }
  }

  return (
    <div>
      <form>
        <textarea className=""
          value={markdown} onChange={(e) => onTextChange(e)}
        >
        </textarea>
        <button type="button" onClick={e => { onPost(e) }}>Post</button>
      </form>
      <p>{notif}</p>
    </div>
  );
}

export default Editor;