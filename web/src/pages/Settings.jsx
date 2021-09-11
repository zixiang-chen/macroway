import React, { useState } from "react";


const Settings = () => {
  const [value, setValue] = useState("Hello, World!")

  return (
    <div className="flex justify-between">
      <aside className="w-3/12">
        <div>
          <h2 className='border-b-2 leading-8 font-bold'>Content</h2>
          <ul>
            <li>Profile</li>
          </ul>
        </div>
        <div>
          <h2 className='border-b-2 leading-8 font-bold'>Account</h2>
          <ul>
            <li>Change Password</li>
          </ul>
        </div>
      </aside>
      <main className="w-9/12">
      </main>
    </div>
  )
};

export default Settings;