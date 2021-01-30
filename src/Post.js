import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';


const Post = ({username,imageUrl,caption}) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar
          className="post-avatar"
          alt="Yechubot"
          src="https://images.unsplash.com/photo-1611827281392-a2dbd1534d92?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
           <h3>{username}</h3>
      </div>

      {/*image */}
     { <img className="post-image" src={imageUrl} alt="posts"/>}
      {/*username, caption */}
      <h4 className="post-text"><strong>{username}:</strong> {caption} </h4>
    </div>
  );
}

export default Post;