import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Movie } from '../typings';

type Props = {
    // when using firbase
    // movie: Movie | DocumentData
    movie: Movie
}

export const Thumbnail = ({movie}: Props) => {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transitio duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
        onClick={()=> {setCurrentMovie(movie); setShowModal(true)}}
    >
        <Image src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`} 
            layout="fill" alt=''
            className='rounded-sm object-cover md:rounded'
        />
    </div>
  )
}
