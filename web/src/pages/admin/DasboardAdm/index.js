import React from 'react';

import {
  MdInsertPhoto,
  MdEventNote,
  MdStarBorder,
  MdInsertComment,
} from 'react-icons/md';

import { Container, CardButton, CardHeader, CardBody, Grid } from './styles';
import Header from '~/components/HeaderAdm';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Grid>
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
                Selecione uma nova imagem para o seu banner principal
                wedqwedqedqwe
              </p>
            </CardBody>
          </CardButton>

          <CardButton>
            <span>
              <div />
            </span>
            <CardHeader>
              <MdEventNote color="#FFF" size={35} />
            </CardHeader>
            <CardBody>
              <strong>Sobre nós</strong>
              <p>
                É neste campo que seus clientes podem conhecer um pouco mais
              </p>
            </CardBody>
          </CardButton>

          <CardButton>
            <span>
              <div />
            </span>
            <CardHeader>
              <MdStarBorder color="#FFF" size={35} />
            </CardHeader>
            <CardBody>
              <strong>Avaliações</strong>
              <p>
                É neste campo que seus clientes podem conhecer um pouco mais
                sobre você
              </p>
            </CardBody>
          </CardButton>

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
                É neste campo que seus clientes podem conhecer um pouco mais
                sobre você
              </p>
            </CardBody>
          </CardButton>
        </Grid>
      </Container>
    </>
  );
}
