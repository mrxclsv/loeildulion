import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Home, ScrollToTop /* Footer */ } from './utils/imports'


function App() {

  // ! MENU HOOK IMPORTS
  // const [menu, setMenu, toggleMenu] = useMenu()


  const [scrollTop, setScrollTop] = useState(false);

  function toggleScroll() {
    if (window.scrollY > 500) {
      setScrollTop(true)
    } else setScrollTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleScroll);
    return () => { window.removeEventListener('scroll', toggleScroll) }
  }, [])

  let scrollDuration = 200; // duration in milliseconds
  let scrollStep = -window.scrollY / (scrollDuration / 1); // 16ms is the time between frames

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div className="flexV scrollbar-hide">

      <Navbar />
      <ScrollToTop scrollTop={scrollTop} scrollStep={scrollStep} toggleScroll={toggleScroll} scrollToTop={scrollToTop} />

      <main className="">

        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/*" element={<NotFound />} /> */}
        </Routes>

      </main>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
