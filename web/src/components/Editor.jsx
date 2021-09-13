import React, { useState } from "react";
import ArticleViewer from "./ArticleViewer";


const Editor = ({ article, onSubmit }) => {
  const [title, setTitle] = useState(article?.title || '');
  const [content, setContent] = useState(article?.content || '');
  const [preview, setPreview] = useState(false);
  // 

  return (
    <div className="w-fullbg-gray-100 rounded">
      {
        preview ? (
          <ArticleViewer article={{ title, content }} />
        ) : (
          <form className="ring-2 ring-gray-50">
            <div>
              <div>
                <input className="w-full mb-4 mx-auto p-2 bg-gray-50"
                  type="text" value={title} placeholder={"title (optional)"}
                  onChange={e => { setTitle(e.target.value.trimStart()); }}
                />
              </div>
              <div>
                <textarea className="w-full mb-4 mx-auto p-2 h-96 bg-gray-50"
                  value={content} placeholder="content (Markdown supported)"
                  onChange={(e) => { setContent(e.target.value.trimStart()); }}
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
          <button className="w-28 mx-2 border-2" type="button" onClick={e => { onSubmit(title, content) }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Editor;