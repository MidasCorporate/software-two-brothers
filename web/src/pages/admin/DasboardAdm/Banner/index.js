import React from 'react';

import { MdInsertPhoto } from 'react-icons/md';

import { CardButton, CardHeader, CardBody } from '../styles/styles';

function Banner() {
  return (
    <CardButton>
      <span>
        <div />
      </span>
      <CardHeader>
        <MdInsertPhoto color="#FFF" size={35} />
      </CardHeader>
      <CardBody>
        <strong>Baner pincipal</strong>
        <p>
          Selecione uma nova imagem para o seu banner principal wedqwedqedqwe
        </p>
      </CardBody>
    </CardButton>
  );
}

export default Banner;
