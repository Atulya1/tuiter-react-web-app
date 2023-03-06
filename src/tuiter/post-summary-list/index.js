import postArray from "./post.json" ;
import PostSummaryItem from "./post-summary-item";
import React from "react";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
    {
        postArray.map(post =>
            <PostSummaryItem
                key={post._id}
                post={post}/>
        )
    }
    </ul>)
}
export default PostSummaryList;