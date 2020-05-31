import React from 'react';

import { Intro, IntroBody, Container, Row, Coll } from './styles';
import logo from '~/assets/logo.png';
import AboutClient from '~/pages/client/Dashboard/About';

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
    </>
  );
}
