import React from 'react';

import { MdEventNote } from 'react-icons/md';

import { CardButton, CardHeader, CardBody } from '../styles/styles';

function About() {
  return (
    <CardButton>
      <span>
        <div />
      </span>
      <CardHeader>
        <MdEventNote color="#FFF" size={35} />
      </CardHeader>
      <CardBody>
        <strong>Sobre nós</strong>
        <p>É neste campo que seus clientes podem conhecer um pouco mais</p>
      </CardBody>
    </CardButton>
  );
}

export default About;
