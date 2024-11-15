import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {postService} from "./services/dumyjson.api.services";
import {IPost} from "./components/models/IPost";
import Posts from "./components/posts/Posts";

function App() {

    const[posts, setPosts] = useState<IPost[]>([])

    const lift = async (id:number) => {
        setPosts(await postService.getPostsOfUser(id))
    }

  return (
    <div>
      <Users key={null} lift={lift}/>
        <hr/>
        <Posts posts={posts}/>
    </div>

  );
}

export default App;
