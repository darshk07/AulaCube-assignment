import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SearchPost } from './searchpost';
import { PostCard } from './postcard';

type Props = {
    comments: any[],
    setPostId: any
}

export const Posts = (props: Props) => {
    const filteredComments = Array.from(
        props.comments.reduce((result, comment) => {
            if (!result.has(comment.postId)) {
                result.set(comment.postId, comment);
            }
            return result;
        }, new Map()).values()
    );
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    let queryfilteredComments: any = []

    useEffect(() => {
        queryfilteredComments = filteredComments.filter((comment: any) => {
            if (String(comment.postId).includes(query)) {
                return comment;
            }
        });
        setResults(queryfilteredComments);
    }, [query]);

    return (
        <div>
            <SearchPost setQuery={setQuery} />
            <Scrollbars style={{ height: 650 }} universal={true}>
                <div className="posts">
                    {
                        queryfilteredComments.length === 0 && query !== "" ?
                        results.map((comment: any) => {
                            return (
                                <PostCard key={comment.id} attributes={comment} setPostId={props.setPostId} />
                                )
                            }) : filteredComments.map((comment: any) => {
                                return (
                                    <PostCard key={comment.id} attributes={comment} setPostId={props.setPostId} />
                                    )
                            })
                        }
                </div>
            </Scrollbars>
        </div>
    )
}