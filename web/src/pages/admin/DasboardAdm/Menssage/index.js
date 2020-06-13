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
        <table>
          <tbody>
            <tr>
              <td>Two Brothers</td>
              <td>two@brothers.com</td>
              <td>010102010100</td>
              <td>110101101021</td>
              <td>quantos custa para polir um golf</td>
            </tr>
            <tr>
              <td>Two Brothers</td>
              <td>two@brothers.com</td>
              <td>010102010100</td>
              <td>110101101021</td>
              <td>quantos custa para polir um golf</td>
            </tr>
            <tr>
              <td>Two Brothers</td>
              <td>two@brothers.com</td>
              <td>010102010100</td>
              <td>110101101021</td>
              <td>quantos custa para polir um golf</td>
            </tr>
            <tr>
              <td>Two Brothers</td>
              <td>two@brothers.com</td>
              <td>010102010100</td>
              <td>110101101021</td>
              <td>quantos custa para polir um golf</td>
            </tr>
            <tr>
              <td>Two Brothers</td>
              <td>two@brothers.com</td>
              <td>010102010100</td>
              <td>110101101021</td>
              <td>quantos custa para polir um golf</td>
            </tr>
          </tbody>
        </table>
      </WindowMessage>
    </>
  );
}

export default Post;
