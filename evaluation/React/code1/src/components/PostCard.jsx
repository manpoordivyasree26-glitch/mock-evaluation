import {useContext,useState} from "react";
import { PostContext} from "../context/PostsContext";
import { ThemeContext } from "../context/ThemeContext";

const PostCard=({post})=>{
const { updatePost, deletePost}=useContext(PostContext)
const[isEdit,setIsEdit]=useState(false);
const[title,setTitle]=useState(post.title);
const[body,setBody]=useState(post,body);

const saveEdit=()=>{
    updatePost(post,id ,title,body);
    setIsEdit(false);

};
return(
    <div className={`card ${theme}`}>
        {isEdit ?(
            <>
         <input value={title} onChange={e=>setTitle(e.target.value)}>
         </input>
         <textarea value ={body} onChange={e=>setBody(e.target.value)}/>
            <button onClick={saveEdit}>save</button>
            </>
        ):(
            <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>setIsEdit(true)}>Edit</button>
            <button onClick={()=>deletePost(post.id)}>Delete</button>

            </>
        )}

    </div>
);
};
export default PostCard;