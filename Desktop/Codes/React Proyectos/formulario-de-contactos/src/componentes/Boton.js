import React, { useState } from 'react';
import "../hojas de estilos/Boton.css";

const toggle = document.getElementById('container-boton');
const body = document.querySelector('body');

const Boton = function() {
    const [esActivo, setEsActivo] = useState(false);

    const handleToggleClick = () => {
        setEsActivo(!esActivo);
    };

    return (
        <button 
            className={`botonToggle ${esActivo ? 'active' : ''}`}
            onClick={handleToggleClick}>
        </button>
    );  
};

toggle.addEventListener('click', function() {
  if (toggle.classList.contains('active')) {
    toggle.classList.remove('active');
    body.classList.remove('active');
  } else {
    toggle.classList.add('active');
    body.classList.add('active');
  }
});

export default Boton;
