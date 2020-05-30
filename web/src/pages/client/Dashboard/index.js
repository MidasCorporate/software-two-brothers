import React from 'react';

import { MdRemoveRedEye } from 'react-icons/md';

import {
  Card,
  Image,
  CardHeader,
  CardDescription,
  CardContent,
  Container,
  Button,
} from './styles';

import car from '~/assets/carro1.jpg';

export default function Dashboard() {
  return (
    <Container>
      <Card>
        <Image src={car} alt="Logo" />
        <CardContent>
          <CardHeader>Matthew</CardHeader>
          <CardDescription>
            Carro completo e semi novo, quadro rodas novas e porta malas
            direcional
          </CardDescription>
          <Button type="button">Ver</Button>
        </CardContent>
      </Card>
      <Card>
        <MdRemoveRedEye size={30} color="#FFF" />
        <Image src={car} alt="Logo" />
        <CardContent>
          <CardHeader>Matthew</CardHeader>
          <CardDescription>
            Carro completo e semi novo, quadro rodas novas e porta malas
            direcional
          </CardDescription>
          <Button type="button">Ver</Button>
        </CardContent>
      </Card>
    </Container>
  );
}
