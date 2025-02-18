

interface MovieProps {
  movie: {
      backdrop_path: string;
      id: number;
      original_title: string;
  }
}

function MovieCard({ movie }: MovieProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  
  return (
      <div className="flex flex-col space-y-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
              <img 
                  src={IMAGE_BASE_URL + movie.backdrop_path} 
                  className="w-full h-full object-cover transition-transform duration-300 
                           group-hover:scale-110"
                  alt={movie.original_title}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300">
              </div>
          </div>
          <div className="space-y-1 px-1">
              <h3 className="text-gray-400 text-xs font-medium">
                  {movie.id % 2 === 0 ? 'WATCH MOVIE' : 'START WATCHING'}
              </h3>
              <h2 className="text-white text-sm font-bold truncate">
                  {movie.original_title}
              </h2>
          </div>
      </div>
  );
}

export default MovieCard;