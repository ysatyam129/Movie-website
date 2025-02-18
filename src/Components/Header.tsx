import  { useState, useEffect } from 'react'
import logo from './../assets/Images/logo2.jpg'
import { IoChevronDownOutline, IoChevronUpOutline, IoSearch } from "react-icons/io5"

function Header() {
    const [toggle, setToggle] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    
    const menu = [
        { id: 1, name: "Home" },
        { id: 2, name: "Movies" },
        { id: 3, name: "TV" },
        { id: 4, name: "Sports" },
        { id: 5, name: "News" },
        { id: 6, name: "Hubs" }
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed top-0 z-50 w-full transition-all duration-500 ${
            isScrolled ? 'bg-[#1e2126]/80 backdrop-blur-sm' : 'bg-transparent'
        }`}>
            <div className='flex items-center justify-between p-4 px-6 md:px-10'>
          
                <img 
                    src={logo} 
                    className="w-[68px] cursor-pointer hover:opacity-80 transition-opacity" 
                    alt="MovieModlogo" 
                />
                

           
                <ul className='hidden md:flex items-center gap-8'>
                    {menu.map((item) => (
                        <li 
                            key={item.id} 
                            className='text-gray-300 text-[16px] font-medium cursor-pointer 
                                     hover:text-white px-4 py-2 
                                     transition-colors duration-300 ease-in-out'
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

           
                <div className='md:hidden relative flex justify-center w-full'>
                    <button 
                        className='text-white font-medium flex items-center 
                                 rounded-md cursor-pointer px-4 py-2
                                 transition-colors duration-300'
                        onClick={() => setToggle(!toggle)}
                    >
                        <span>Menu</span>
                        {!toggle ? 
                            <IoChevronDownOutline className='ml-2' /> : 
                            <IoChevronUpOutline className='ml-2' />
                        }
                    </button>

                  
                    {toggle && (
                        <ul className='absolute top-full mt-2 bg-[#1e2126]/90 backdrop-blur-sm w-[200px] 
                                     rounded-md overflow-hidden shadow-xl z-50'>
                            {menu.map((item) => (
                                <li 
                                    key={item.id} 
                                    className='text-gray-300 text-[16px] font-medium cursor-pointer 
                                             hover:text-white px-4 py-3 
                                             transition-colors duration-300 ease-in-out border-b 
                                             border-gray-700/50 last:border-none'
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

             
                <div className='flex items-center gap-6'>
                    <IoSearch 
                        className='text-[28px] text-gray-300 hover:text-white 
                                 transition-colors duration-300 cursor-pointer' 
                    />
                    <div className='h-8 w-8 rounded-full border-2 border-white/80 
                                  flex items-center justify-center text-white 
                                  text-sm font-medium cursor-pointer 
                                  hover:bg-white hover:text-[#1e2126] 
                                  transition-all duration-300'>
                        S
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header