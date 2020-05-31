import React from 'react';

import { Grid, Icon, Rating } from 'semantic-ui-react';

import { MdComment } from 'react-icons/md';
import {
  Image,
  CardHeader,
  CardDescription,
  CardContent,
  ContainerCard,
  Coments,
  CardComents,
  Container,
  Button,
  CardImg,
  CardFliper,
  Front,
  Back,
  Card,
} from './styles';

import car from '~/assets/carro1.jpg';
import car2 from '~/assets/carro2.jpg';
import moto1 from '~/assets/moto1.jpg';

export default function Dashboard() {
  const sale = ['car1', 'car2', 'car3', 'car4'];
  const coments = ['car1', 'car2', 'car3'];

  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ');
  return (
    <>
      <Container>
        <Grid>
          <Grid.Row columns={5}>
            {sale.map((sal) => (
              <Grid.Column>
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
                      Carro completo e semi novo, quadro rodas novas e porta
                      malas direcional
                    </CardDescription>
                    <Button type="button">Ver</Button>
                  </CardContent>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <Coments>
          <Image src={moto1} alt="Logo" />
          <Grid>
            <Grid.Row columns={5}>
              {coments.map((sal) => (
                <Grid.Column>
                  <CardComents>
                    <MdComment size={20} color="#FFF" />
                    <strong>Paulinho Veloster</strong>
                    <span>27/05/2020</span>
                    <div>
                      Sempre lei meu veloster lá, e nunva me decepsionei com a
                      qualidade do serviçi
                    </div>
                  </CardComents>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Coments>
      </Container>
    </>
  );
}
