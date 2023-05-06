import React from 'react';
import './app.css'
import Inicio from './pages/inicio';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Painel from './pages/painel';
import Projetos from './pages/projetos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="slide"
                timeout={3000}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path='/painel' element={<Painel/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;