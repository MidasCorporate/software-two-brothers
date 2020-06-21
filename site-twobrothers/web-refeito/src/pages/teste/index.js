import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import history from '../../services/history';

function teste() {
  function handleTetse() {
    history.push('/teste2');
  }
  return (
    <>
      <button type="button" onClick={handleTetse}>
        Teste
      </button>
      <Link to="/teste2">Teste2</Link>
      <h1>Teste aqqqquiii</h1>
    </>
  );
}

export default teste;
