import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

const fetchPosts = async () =>{
  try{
    setLoading(true);
    setError("");
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(response.data)
  }catch(error){
     setError(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );
  }finally{
    setLoading(false);
  }
}

useEffect(()=>{
fetchPosts();
},[]);

if(loading){
  return <h2 style={{height:"100vh",width:"100vw",margin:"auto"}}>Loading...</h2>
}

if(error){
    return (
      <div>
        <h2>Error:{error}</h2>
        <button onClick={fetchPosts}> try again </button>
      </div>
    )
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {
        posts.map((post)=>(
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))
      }    
        </tbody>
      </table>
            
    </div>
  )
}

export default Posts
