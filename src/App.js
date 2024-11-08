import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppWrapper from './containers/AppWrapper';

import { Home } from './utils/imports';


function App() {


  return (
    <AppWrapper>

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/*" element={<NotFound />} /> */}
      </Routes>
      
    </AppWrapper>
  );
}

export default App;
