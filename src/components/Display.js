import React, { useState } from 'react'

const Display = ({video, toggle, showComments}) => {

    const {embedUrl, title, views, createdAt, upvotes, downvotes} = video

    const [countUp, setUpCount] = useState(upvotes) 
    const [countDown, setDownCount] = useState(downvotes) 

    function handleUpClick(){
        setUpCount(countUp + 1)
        }

    function handleDownClick(){
        setDownCount(countDown + 1)
        }

    function handleClick() {
        toggle(showComments)
    }

  return (
    <div>
        <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        <h1>{title}</h1>
        <p>{views} Views | {createdAt}</p>
        <button onClick={handleUpClick}>{countUp}👍</button>
        <button onClick={handleDownClick}>{countDown}👎</button>
        <br /><br />
        <button onClick={handleClick}>Hide Comments</button>
    </div>
  )
}

export default Display

