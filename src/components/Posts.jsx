import { postData } from "../raw-data/post-data"; 
import {useState} from "react";


function Posts() {
  // const like = {postData.map((item,index) => ({item.likes})
  const [counter,setCounter] = useState(postData) ;
  
  const handlerAddLike = (id) => { 
        const updatecounter = counter.map((count) => 
          count.id === id ? {...count, likes: count.likes +1 } : count);
          setCounter(updatecounter);
        }
  const handlerDiskLike = (id) => { 
        const updatecounter = counter.map((count) => 
          count.id === id ? {...count, likes: Math.max(0, count.likes -1)  } : count);
          setCounter(updatecounter);
        }
  
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">{counter.map((item) => (
        <div className="post-item" key={item.id}>
          <div className="post-header">
            <h2>{item.title}</h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes:</span>
              <span className="post-likes">{item.likes}</span>
            </div>
          </div>
          <p className="post-content">
            {item.content}
          </p>
          <div className="post-actions">
            <button className="like-button" onClick={() => handlerAddLike(item.id)}>Like</button>
            <button className="dislike-button" onClick={() => handlerDiskLike(item.id)}>Dislike</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
