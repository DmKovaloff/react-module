import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {apiService} from "../services/api.service";


const PostsPage = () => {


    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        apiService.postService.getAll().then(value => setPosts(value))
    }, []);
    return (
        <div>
            <h2> POSTS PAGE </h2>
            {
                posts.map(value =>
                    <div>
                        <hr/>
                        <h3>{value.userId}</h3>
                        {value.body}
                    </div>
                )
            }
        </div>
    );
};


export default PostsPage;