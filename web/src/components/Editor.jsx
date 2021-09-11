import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase/core";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import ReactMarkdown from "react-markdown";
import { CONTENT_TYPE } from "../util";
import { userContext } from "../util";


const Editor = () => {
  const userObj = useContext(userContext);
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [type, setType] = useState(CONTENT_TYPE.POST)
  const [preview, setPreview] = useState(false);
  const [notif, setNotisf] = useState("");
  // 
  useEffect(() => {
    const determineType = () => {
      if (markdown.length >= 512 || title.length >= 1) {
        setType(CONTENT_TYPE.ARTICLE);
      } else {
        setType(CONTENT_TYPE.POST);
      }
    }
    determineType();
  }, [title, markdown]);
  const onSave = (e) => {
    //
  }
  const onPublish = async (e) => {
    if (markdown.length <= 0) {
      setNotisf("Empty Content");
      return;
    }
    if (type == CONTENT_TYPE.ARTICLE && title.length < 1) {
      setNotisf("Title Required");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'articles'), {
        title: title,
        content: markdown,
        type: type,
        createdAt: Timestamp.now(),
        authorId: userObj.uid
      });
      setNotisf(`Successful Published a Article with id=${docRef.id}`);
    } catch (err) {
      setNotisf(`${err.message}`);
    }
  }

  return (
    <div className="w-fullbg-gray-100 rounded">
      <div>
        <h4 className="flex flex-row justify-between mb-4 bg-gray-50 ">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {preview ? "Preview" : "Write"}
          </span>
          <span className="mx-4 px-1 rounded bg-blue-400 text-gray-50">{type}</span>
        </h4>
        <p className="bg-green-400 text-gray-50 text-center">{notif}</p>
      </div>
      {
        preview ? (
          <div className="prose max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <form className="ring-2 ring-gray-50">
            <div>
              <div>
                <input className="w-full mb-4 mx-auto p-2 bg-gray-50"
                  placeholder={"title" + (type == CONTENT_TYPE.POST ? " (optional)" : " (required)")}
                  type="text" value={title} onChange={e => { setTitle(e.target.value.trimStart()); }}
                />
              </div>
              <div>
                <textarea className="w-full mb-4 mx-auto p-2 h-96 bg-gray-50"
                  value={markdown} placeholder="content (Markdown supported)"
                  onChange={(e) => { setMarkdown(e.target.value.trimStart()); }}
                >
                </textarea>
              </div>
            </div>
          </form>
        )
      }
      <div className="flex justify-between bg-gray-50">
        <div>
        </div>
        <div>
          <button className="w-28 mx-2 border-2" type="button" onClick={e => { setPreview(!preview); }}>Preview</button>
          <button className="w-28 mx-2 border-2" type="button" onClick={e => { onSave(e) }}>Save</button>
          <button className="w-28 mx-2 border-2 bg-green-500 text-white" type="button" onClick={e => { onPublish(e) }}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default Editor;