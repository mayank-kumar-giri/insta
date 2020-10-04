import React, { Component } from 'react';
import "./post.css";
import profile from '../../assets/imgs/profile.jpg';
import { Row } from 'react-bootstrap';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() { 
      const {
        userImage,
        userName,
        postDate,
        postImages,
        caption,
        location
      } = this.props;
      
      return (
        <div className="container fluid">
          <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={userImage} alt={userName} />
                </div>
                <div className="Post-username">
                  <span>{userName}</span>
                </div>
                <div className="Post-location">
                  <span>{location}</span>
                </div>
                <div className="Post-date">
                  <span>{postDate}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt={userName+"'s Post"} src={postImages && postImages[0]["ImageUrl"]} />
              </div>
            </div>
            <div className="Post-caption">
              <strong> {userName} </strong> 
              <span> {caption} </span>
            </div>
        </article>
      </div> 
    );
  }
}
 
Post.defaultProps = {
    userImage: "",
    userName: "Username",
    postDate: "PostDate",
    postImages: null,
    caption: "Caption",
}

export default Post;