import React from 'react'

type Props = {
    attributes: {
        postId: string,
        id: string,
        name: string,
        email: string,
        body: string
    }
    setPostId: any
}

export const PostCard = (props: Props) => {
    return (
        <div
            onClick={() => { props.setPostId(props.attributes.postId) }}
            className="m-4 cursor-pointer max-w-6xl rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <p className="text-gray-500 italic">Post {props.attributes.postId}</p>
                <div className="font-bold text-xl mb-2">Post Title: {props.attributes.name}</div>
                <p className="text-gray-700 text-base">Body: {props.attributes.body}</p>
                <div className="mt-2">
                    <p className="text-gray-600">Email: {props.attributes.email}</p>
                </div>
            </div>
        </div>

    )
}

