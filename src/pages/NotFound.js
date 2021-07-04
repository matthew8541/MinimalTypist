import React, { useEffect } from 'react'

const NotFound = () => {
  useEffect(() => {
    document.body.className = "body";
  }, [])
  return (
    <div>
      <h1 className="centered">Result are not found...</h1>
    </div>
  );
};

export default NotFound;