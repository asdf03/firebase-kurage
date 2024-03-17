import React, { useEffect, useState } from 'react';
import './App.css';
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "todo");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  return <div className="App">
    {posts.map((post) => (
      <div>{post.name}</div>
    ))}
  </div>
}

export default App;
