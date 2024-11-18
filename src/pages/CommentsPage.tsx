import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {apiService} from "../services/api.service";
import {IComment} from "../models/IComment";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        apiService.commentService.getAll().then(value => setComments(value))
    }, []);

    return (
        <div>
            <h2> COMMENTS PAGE: </h2>
            {
                comments.map(value => <div><hr/>{value.body}</div>)
            }
        </div>
    );
};

export default CommentsPage;