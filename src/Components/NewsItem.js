import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="overflow-hidden w-80 mx-8 my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
            <div className='img w-full h-40 overflow-hidden bg-black '>
                <img alt='' src={imageUrl ? imageUrl : "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F5ab0917a-07a2-49a9-9eeb-69ec002ab38c.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900"}></img>
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}...</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}...</p>
                <p className='mb-3'>BY {author ? author : "Unknown"} on {new Date(date).toLocaleString()}</p>
                <a href={newsUrl} target='blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default NewsItem
