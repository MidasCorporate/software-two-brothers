import React from 'react';

import { MdInsertComment } from 'react-icons/md';

import { CardHeader, CardBody, CardButton } from '../styles/styles';

function Post() {
  return (
    <CardButton>
      <span>
        <div />
      </span>
      <CardHeader>
        <MdInsertComment color="#FFF" size={35} />
      </CardHeader>
      <CardBody>
        <strong>Mensagens</strong>
        <p>
          É neste campo que seus clientes podem conhecer um pouco mais sobre
          você
        </p>
      </CardBody>
    </CardButton>
  );
}

export default Post;
