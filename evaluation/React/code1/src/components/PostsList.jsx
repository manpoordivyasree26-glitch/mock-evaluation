import {useContext} from "react";
import {PostsContext} from "./context/PostsContext";
import PostCard from "./PostCard";

const PostsList=()=>{
    const {posts}=useContext(PostsContext);

    return(
        <div>
            {posts.map(post=>(
                <PostCard key={post.id} post={post}/>
            ))}
        </div>
    )
}
export default PostsList;