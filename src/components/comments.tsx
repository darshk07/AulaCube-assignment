import React, { useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { CommentCard } from './commentcard'

type Props = {
    comments: any[],
    postId: number
}

export const Comments = (props: Props) => {
    const filterComments = props.comments.filter((comment) => {
        return comment.postId === props.postId;
    });
    return (
        <Scrollbars style={{ height: 720}} universal={true}>
            <div className="comments mt-10">
                {props.postId ? filterComments.map((comment: any) => {
                    return (
                        <CommentCard key={comment.id} attributes={comment}/>
                    )
                }) : 
                <div className="text-gray-700 m-3">Select a post to view comments</div>}
            </div>
        </Scrollbars>
    )
}