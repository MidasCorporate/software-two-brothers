import React from 'react';

import { Card, Grid, Icon, Rating } from 'semantic-ui-react';

import {
  Image,
  CardHeader,
  CardDescription,
  CardContent,
  ContainerCard,
  Coments,
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
        <Grid>
          <Grid.Row columns={5}>
            {coments.map((sal) => (
              <Grid.Column>
                <Card>
                  <Card.Content header="Paulinho Veloster" />
                  <span>27/05/2020</span>
                  <Card.Content description={description} />
                  <Card.Content extra>
                    <Rating icon="star" defaultRating={3} maxRating={4} />
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}
