import React, { useState, useContext } from "react";
import Editor from "../components/Editor";
import { userContext } from "../util";


const Home = () => {
  const [editable, setEditable] = useState(false);
  const userObj = useContext(userContext);
  const toggleEditor = e => {
    if (userObj !== null) {
      setEditable(true);
    }
  }
  // 
  return (
    <div className="w-4/5 mx-auto p-4">
      {
        editable ? (
          <Editor userId={userObj.uid} />
        ) : (
          <button onClick={e => { toggleEditor(e) }}>Create</button>
        )
      }
    </div>
  )
}

export default Home;