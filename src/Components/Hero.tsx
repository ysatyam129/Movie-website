import  { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

interface Movie {
    id: number;
    backdrop_path: string;
    original_title: string;
    overview: string;
}

interface VideoData {
    key: string;
    site: string;
    type: string;
}

function Hero() {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
    const [moviesList, setMovieList] = useState<Movie[]>([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showTrailer, setShowTrailer] = useState(false);
    const [currentTrailer, setCurrentTrailer] = useState<VideoData | null>(null);

    useEffect(() => {
        getPopularMovies();
    }, []);

    useEffect(() => {
        if (moviesList.length > 0 && !showTrailer) {
            const interval = setInterval(() => {
                setCurrentMovieIndex((prev) => 
                    prev === moviesList.length - 1 ? 0 : prev + 1
                );
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [moviesList, showTrailer]);

    const getPopularMovies = async () => {
        try {
            const response = await GlobalApi.getPopularMovies();
            const results = response?.data?.results || [];
            setMovieList(results.slice(0, 5));
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setIsLoading(false);
        }
    };

    const handlePlayClick = async () => {
        try {
            const currentMovie = moviesList[currentMovieIndex];
            const response = await GlobalApi.getMovieVideos(currentMovie.id);
            const videos = response.data.results;
            const trailer = videos.find(
                (video: VideoData) => video.type === "Trailer" && video.site === "YouTube"
            );
            
            if (trailer) {
                setCurrentTrailer(trailer);
                setShowTrailer(true);
            } else {
                alert('No trailer available for this movie');
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
        );
    }

    return (
        <div className='relative h-[85vh] mt-16'>
            <div className='absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full'></div>
            {moviesList.length > 0 && (
                <>
                    {showTrailer ? (
                        <div className='absolute inset-0 bg-black/90 z-50 flex items-center justify-center'>
                            <div className='relative w-full max-w-4xl aspect-video'>
                                <iframe
                                    className='w-full h-full'
                                    src={`https://www.youtube.com/embed/${currentTrailer?.key}?autoplay=1`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <button
                                    onClick={() => setShowTrailer(false)}
                                    className='absolute top-4 right-4 text-white bg-red-600 
                                             px-4 py-2 rounded-md hover:bg-red-700 
                                             transition-colors duration-300'
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <img
                                src={IMAGE_BASE_URL + moviesList[currentMovieIndex].backdrop_path}
                                className='w-full h-full object-cover transition-all duration-700 ease-in-out'
                                alt={moviesList[currentMovieIndex].original_title}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'>
                                <div className='absolute bottom-32 px-10 md:px-24 max-w-[800px]'>
                                    <h2 className='text-white text-[19px] lg:text-[27px] mb-3'>
                                        Watch only on HULU
                                    </h2>
                                    <h2 className='text-white text-[36px] lg:text-[47px] font-bold mb-6'>
                                        {moviesList[currentMovieIndex].original_title}
                                    </h2>
                                    <div className='flex gap-5 mt-5'>
                                        <button 
                                            onClick={handlePlayClick}
                                            className='bg-white text-black px-8 py-3 rounded-md 
                                                     hover:bg-opacity-80 transition-all duration-300 
                                                     font-semibold flex items-center gap-2'
                                        >
                                            PLAY TRAILER
                                        </button>
                                        <button className='bg-gray-500/50 text-white px-8 py-3 rounded-md 
                                                         hover:bg-gray-500 transition-all duration-300 
                                                         backdrop-blur-sm font-semibold'>
                                            DETAILS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default Hero;