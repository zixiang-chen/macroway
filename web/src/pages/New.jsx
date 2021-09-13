import React, { useContext } from "react";
import Editor from "../components/Editor";
import { addArticle } from "../firebase/apis";
import { userContext } from "../util";
import { useHistory } from "react-router-dom";


const New = () => {
  const userObj = useContext(userContext);
  const history = useHistory();
  const onSubmit = (title, content) => {
    addArticle({ title, content, authorId: userObj.uid })
      .then(value => {
        history.push('/');
      });
  }

  return (
    <div className="w-fullbg-gray-100 rounded">
      <div>
        <h4 className="flex flex-row justify-between mb-4 bg-gray-50 ">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            NEW
          </span>
        </h4>
      </div>
      <Editor onSubmit={onSubmit} />
    </div>
  );
}

export default New;