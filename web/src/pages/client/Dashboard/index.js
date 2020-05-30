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
  CardImg,
  CardFliper,
  Front,
  Back,
} from './styles';

import car from '~/assets/carro1.jpg';
import car2 from '~/assets/carro2.jpg';

export default function Dashboard() {
  return (
    <Container>
      <Card>
        <CardImg>
          <CardFliper>
            <Front>
              <Image src={car} alt="Logo" />
            </Front>
            <Back>
              <Image src={car2} alt="Logo" />
            </Back>
          </CardFliper>
        </CardImg>
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
        <CardImg>
          <CardFliper>
            <Front>
              <Image src={car} alt="Logo" />
            </Front>
            <Back>
              <Image src={car2} alt="Logo" />
            </Back>
          </CardFliper>
        </CardImg>
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
        <CardImg>
          <CardFliper>
            <Front>
              <Image src={car} alt="Logo" />
            </Front>
            <Back>
              <Image src={car2} alt="Logo" />
            </Back>
          </CardFliper>
        </CardImg>
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
