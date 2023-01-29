import Image from 'next/image';
import React from 'react';
import { Movie } from '../typings';

type Props = {
    // when using firbase
    // movie: Movie | DocumentData
    movie: Movie
}

export const Thumbnail = ({movie}: Props) => {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transitio duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
        <Image src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`} 
            layout="fill" alt=''
            className='rounded-sm object-cover md:rounded'
        />
    </div>
  )
}
