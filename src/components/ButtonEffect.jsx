import { useNavigate} from 'react-router-dom';


import React, { useState, useEffect } from 'react';

function ButtonEffect(props) {



  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()

  function handleClick() {
  navigate(props.endereco);
}
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5100); // tempo em milissegundos (2 segundos neste caso)

    const visible= setTimeout(() => {
      setIsVisible(true);
    }, 6100); // tempo em milissegundos (2 segundos neste caso)

    // Limpando o timer para evitar vazamento de memória
    return () => clearTimeout(timer,visible);
  }, []);

  return (
    <div>
      {showButton && (
        <button className={`buttonEffect ${isVisible ? 'visivel' : ''}`} onClick={handleClick}>
          {props.txt}
        </button>
      )}
    </div>
  );
}

export default ButtonEffect;