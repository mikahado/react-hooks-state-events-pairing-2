import React, { useState } from 'react'
import video from "../data/video.js";
import Display from './Display'
import Comments from './Comments'

function App() {

  const [showComments, setShowComments] = useState(false)

  function handleToggle(){
    setShowComments(!showComments)
  }

  // if (!comments) return null;

  return (
    <div className="App">
      <Display video={video} toggle={handleToggle} showComments={showComments} />
      <Comments toggleHide={showComments} comments={video.comments} />
    </div>
  );
}
   export default App;
