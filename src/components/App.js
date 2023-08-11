import '../css/styles.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

import ViewBooks from './viewBooks'
import CreateBook from './createBook'

function App() {

    return(
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<ViewBooks />} />
              <Route path="create-book" element={<CreateBook />}/>
          </Routes>
            
        </BrowserRouter>
      </>
    )  
      
}

export default App;
