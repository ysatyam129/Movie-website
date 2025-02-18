import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-[#1e2126] text-gray-400">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                 
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold">About</h3>
                        <p className="text-sm leading-relaxed">
                            This MoviesMod Website was created as a demonstration of modern web development
                            skills using React, TypeScript, and Tailwind CSS. Watch your favorite movies and shows.
                        </p>
                    </div>

              
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/movies" className="hover:text-white transition-colors">
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link to="/tv" className="hover:text-white transition-colors">
                                    TV Shows
                                </Link>
                            </li>
                            <li>
                                <Link to="/mylist" className="hover:text-white transition-colors">
                                    My List
                                </Link>
                            </li>
                        </ul>
                    </div>

            
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/ysatyam129" 
                               className="text-2xl hover:text-white transition-colors"
                               target="_blank"
                               rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" 
                               className="text-2xl hover:text-white transition-colors"
                               target="_blank"
                               rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://x.com/home?lang=en" 
                               className="text-2xl hover:text-white transition-colors"
                               target="_blank"
                               rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

            
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-sm">
                                © {currentYear} Developed with{' '}
                                <span role="img" aria-label="heart" className="text-red-500">
                                    ❤️ 
                                </span>{' '}
                                by{' '}
                                <a 
                                    href="https://github.com/ysatyam129"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-semibold hover:text-cyan-400 transition-colors"
                                >
                                    Satyam Singh Yadav
                                </a>
                            </p>
                        </div>
                        <div className="text-sm flex space-x-4">
                            <Link to="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
