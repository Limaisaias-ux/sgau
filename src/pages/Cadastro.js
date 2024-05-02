import React from 'react'
import './Cadastro.css'; 
import Arvore from '../img/arvore.png';

function Cadastro() {
  return (
    <>
      <img src={<Arvore />} />
      <div className='divCadastro'>
        <h1>Cadastro de Árvores</h1>
      </div>
      <div className='fundo'>
        
      </div>
    </>
  )
}

export default Cadastro