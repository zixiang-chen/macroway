import React from "react";


const Spinner = () => {
  return (
    <div className="w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="inline h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
  );
}

export default Spinner;