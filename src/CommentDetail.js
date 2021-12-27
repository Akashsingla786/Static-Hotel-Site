import React from 'react'



const CommentDetail=props=>{
    return(
        <div className="comment">
           
            <div className="content">
            <h5 className="author">
            {props.author}
            </h5>
            <div className="metadata">
            <span className="date">
            {props.timeAgo}
            </span>
            </div>
            <div className="t">
            {props.content}
            </div>
            <br></br>
            </div>

        </div>
    );
}
export default CommentDetail;