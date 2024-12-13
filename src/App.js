import Home from './pages/home';
import Bestiary from './pages/Bestiary';
import MonsterDetail from './pages/MonsterDetail';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bestiary' element={<Bestiary/>} />
          <Route path='monster/:id' element={<MonsterDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
