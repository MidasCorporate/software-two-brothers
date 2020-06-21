import React from 'react';

// import { Container } from './styles';

import history from '../../services/history';

function teste() {
  function handleTetse() {
    history.push('/teste1');
  }
  return (
    <>
      <button type="button" onClick={handleTetse}>
        Teste
      </button>
      <h1>Teste222222</h1>
    </>
  );
}
export default teste;
