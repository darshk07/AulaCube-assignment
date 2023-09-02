import React from 'react'

type Props = {
    setQuery: any
}

export const SearchPost = (props: Props) => {
    const inputHandler = (e: any) => {
        props.setQuery(e.target.value)
    }
    return (
        <div className="m-4">
            <label className="relative block">
                <input 
                onChange={inputHandler}
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for post" type="text" name="search" />
            </label>
        </div>
    )
}