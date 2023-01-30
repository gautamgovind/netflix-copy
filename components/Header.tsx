import { BellIcon, FilmIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = useAuth();

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY>0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" 
                width={100} height={100}
                alt="" className="cursor-pointer object-contain"
            />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
            </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
            <FilmIcon className='hidden sm:inline h-6 w-6' />
            <p className='hidden lg:inline'>Kids</p>
            <BellIcon  className='sm:inline h-6 w-6' />
            {/* <Link href="/account"> */}
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt=''
                    width={30}
                    height={30}
                    className="cursor-pointer rounded"
                    onClick={logout}
                />
            {/* </Link> */}
        </div>
    </header>
  )
}

export default Header