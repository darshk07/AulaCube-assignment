import React from 'react'

type Props = {
    attributes: {
        postId: string,
        id: string,
        name: string,
        email: string,
        body: string
    }
}

export const CommentCard = (props: Props) => {
    return (
        <div
            className=" m-4 max-w-6xl rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <h6 className="italic text-gray-500">Comment {props.attributes.id}</h6>
                <p className="text-gray-700 text-base">Body: {props.attributes.body}</p>
                <div className="mt-2">
                    <p className="text-gray-600">Author: {props.attributes.name}</p>
                    <p className="text-gray-600">Email: {props.attributes.email}</p>
                </div>
            </div>
        </div>

    )
}

