import GenresList from '../Constant/GenresList'
import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from './MovieList'



function GenereMoviesList() {
return (
    <div className='p-5 px-10 md:px-20'>
            {GenresList.genere.map((item: { id: number; name: string }, index) => index <= 4 && (
                    <div className='flex justify-between items-center'>
                            <h2 className='text-white text-[23px] font-bold'>{item.name}
                            <span className='font-normal text-[16px] cursor-pointer text-gray-400 flex items-center'>
                                    VIEW ALL <IoChevronForwardSharp className='text-white ml-1'/>
                            </span></h2>
                            <MovieList genreId={item.id} sectionTitle={item.name} />
                    </div>
            ))}
    </div>
)
}

export default GenereMoviesList