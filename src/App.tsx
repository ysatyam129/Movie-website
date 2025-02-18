// import { useState } from 'react'
import './App.css'
import Home from './Screen/Home'
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
            <div className="min-h-screen bg-[#1e2126]">
                <Home />
                <Footer />
            </div>
        </BrowserRouter>
  );
}

export default App
