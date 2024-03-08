import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer, Home } from './utils/imports'


function App() {

  // ! MENU HOOK IMPORTS
  // const [menu, setMenu, toggleMenu] = useMenu()

  return (
    <div className="flexV scrollbar-hide">

      <Navbar />

      <main className='overflow-y-auto scrollbar-hide'>

        <Routes>

          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/*" element={<NotFound />} /> */}

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;
