import React from 'react';

import { Intro, IntroBody, Container, Row, Coll } from './styles';
import logo from '~/assets/logo.png';
<<<<<<< HEAD
import AboutClient from '~/components/About';
import Service from './Services';
=======
import AboutClient from '~/pages/client/Dashboard/About';
>>>>>>> 0c5024e72fb082c71b998537434c5fa911002417

export default function Dashboard() {
  return (
    <>
      <Intro>
        <IntroBody>
          <Container>
            <Row>
              <Coll>
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <h1>
                  Two <span>Brothers</span>
                </h1>
                <p> Especialistas na saude automobilistica</p>
                <a href="#about">Saber Mais</a>{' '}
              </Coll>
            </Row>
          </Container>
        </IntroBody>
      </Intro>
      <AboutClient />
      <Service />
    </>
  );
}
