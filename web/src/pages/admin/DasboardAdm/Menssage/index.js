import React, { useState } from 'react';

import { MdInsertComment, MdCancel } from 'react-icons/md';

import { Form } from '@unform/web';
import Textarea from '~/components/Form/Textarea';

import {
  CardHeader,
  CardBody,
  CardButton,
  WindowMessage,
  DivButton,
  Close,
} from './styles';

function Post() {
  const [tagWindow, setTagWindow] = useState(false);

  function handleWindow() {
    setTagWindow(!tagWindow);
  }

  return (
    <>
      <CardButton onClick={handleWindow}>
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
      <WindowMessage tag={tagWindow}>
        <Close>
          <MdCancel color="red" size={20} onClick={() => handleWindow([])} />
        </Close>
        <Form>
          {/* <h2>
            Edite aqui o campo Sobre nós, para dizer melhor aos seus clientes,
            para eles saberem um pouco mais sobre wifgwlfbdskaçfuwieb
          </h2> */}

          <Textarea rows="20" cols="80" maxLength="500" name="response" />
        </Form>
        <DivButton>
          <button className="btn btn1" type="button">
            <strong>Salvar</strong>
          </button>
          {/* <button type="button">Cancelar</button> */}
        </DivButton>
      </WindowMessage>
    </>
  );
}

export default Post;
