import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { readPolyfill } from "../firebase/polyfill";
import Spinner from "../components/Spinner";


const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    readPolyfill('profile').then(data => {
      setProfile(data);
    });
  }, []);

  return (
    <div>
      {
        profile ? (
          <article className="prose max-w-none">
            <h1>{profile.title}</h1>
            <ReactMarkdown>{profile.content}</ReactMarkdown>
          </article>
        ) : (
          <Spinner />
        )
      }
    </div>
  )
};

export default Profile;