import React from 'react'
import { Link } from 'react-router-dom';

const SearchPageCard = ({content , videoId}) => {
    const {snippet} = content;
    const {title , description , channelTitle , thumbnails} = snippet
  return (
    <div className='lg:flex m-4 w-11/12'>
        <Link
          to={"/watch?v=" +videoId}
          className='w-4/12'
        >
      <img className='w-full rounded-2xl' src={thumbnails?.medium?.url} alt='thumbnail'></img>
      </Link>
      <div className='ml-2 lg:w-8/12'>
        <h1 className='font-bold md:text-2xl'>{title}</h1>
        <p className='mt-2 mb-6'>{channelTitle}</p>
        <p className='text-gray-400 hidden'>{description.length>100 ? description.substring(0,100) : description}</p>
        {description.length>100 && <h3 className="mx-2 px-2 text-gray-500 hover:cursor-pointer hidden">Read More....</h3>}
      </div>
    </div>
  )
}

export default SearchPageCard;
