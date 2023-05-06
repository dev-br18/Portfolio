import React, { useState, useEffect } from 'react';
import axios from '../axios.jsx';
import './projetos.css'

function Projetos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    axios.get('/api/formulario')
      .then(response => {
        setProjetos(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar projetos:', error);
      });
  }, []);

  return (
    <>
    <div >
        <div >
            <ul className='cards'>
                {projetos.map(projeto => (
                <li className='card' key={projeto.id} >
                    <div className='imgContainer'>
                       <img className='imgCard' src={projeto.img} alt={projeto.img} /> 
                    </div>
                    
                    <h3 className='titleCard1'>{projeto.name}</h3>
                    <a className='buttonProjetos' href={projeto.link}>Ver Projeto</a>
                    
                </li>
                ))}
            </ul>
        </div>
    </div>
    
    </>
    
  );
}

export default Projetos;