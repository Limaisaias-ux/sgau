import React from 'react';
import './Relatorios.css';
import Iconrelatorio from '../img/Iconrelatorio.png'

function Relatorios() {
  return (
    <>
        <div className='retopo'>
          <img className='folhalogo' src={Iconrelatorio} alt='Logo de Um Relátorio'></img>
          <h1>Relatórios</h1>
        </div>
        <div className='reladrado'>
          <div className='pqs'>
            <h1>Pesquisa</h1>
          </div>
          <div className='caixar'>
            <forms className='reforms'>
              <label className='relabel'>ID (Código):</label>
              <input className='reput' type='text' />
              <label className='relabel'>Nome Popular:</label>
              <input className='reput' type='text' />
              <label className='relabel'>Data de Cadastro</label>
              <input className='reput' type='date' />
            </forms>
            <button className='brela' type="submit">Pesquisar</button>
            <button className='brela' type="submit">Limpar</button>
          </div>
        </div>
    </>
  )
}

export default Relatorios