
import { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import MovieCard from './MovieCard'
import GlobalApi from '../Services/GlobalApi'

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    original_title: string;
}

function MovieList({ genreId, sectionTitle }: { genreId: number; sectionTitle: string }) {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; 

    useEffect(() => {
        getMovieListByGenreId();
    }, [genreId]);

    const getMovieListByGenreId = async () => {
        try {
            setIsLoading(true);
            const response = await GlobalApi.getMovieByGenreId(genreId);
            setMovieList(response.data.results);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = () => {
        if ((currentPage + 1) * itemsPerPage < movieList.length) {
            setCurrentPage(curr => curr + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(curr => curr - 1);
        }
    };

    const visibleMovies = movieList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    if (isLoading) {
        return <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-48 bg-gray-700 rounded"></div>
                ))}
            </div>
        </div>;
    }

    return (
        <div className="mb-8">
      
            <h2 className="text-white text-xl font-bold mb-4 px-4">{sectionTitle}</h2>
            
            <div className="relative group">
       
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 
                              bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 ${currentPage === 0 ? 'hidden' : ''}`}
                >
                    <IoChevronBackOutline className="text-white text-2xl" />
                </button>

            
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 transition-all duration-500">
                    {visibleMovies.map((movie) => (
                        <div key={movie.id} className="transform transition-transform duration-300 hover:scale-105">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={(currentPage + 1) * itemsPerPage >= movieList.length}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 
                              bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 
                              ${(currentPage + 1) * itemsPerPage >= movieList.length ? 'hidden' : ''}`}
                >
                    <IoChevronForwardOutline className="text-white text-2xl" />
                </button>
            </div>
        </div>
    );
}

export default MovieList;