import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { Intro, IntroBody, Container, Row, Coll, Maps, Footer } from './styles';
import logo from '~/assets/logo.png';
import Service from './Services';
import AboutClient from '~/pages/client/Dashboard/About';
import Reviews from '~/pages/client/Dashboard/Reviews';
import Contact from '~/pages/client/Dashboard/Contact';
import Header from '~/components/Header';

function Dashboard({ google }) {
  const mapStyles = {
    zIndex: '4',
    width: '100%',
    height: '65%',
  };

  return (
    <>
      <Header />
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
                <p> Especialistas em saude automobilistica</p>
                <a href="#about">Saber Mais</a>{' '}
              </Coll>
            </Row>
          </Container>
        </IntroBody>
      </Intro>
      <AboutClient />
      <Service />
      <Reviews />
      {/* <Maps>
        <Map
          google={google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: -19.3949988, lng: -54.5728501 }}
        >
          <Marker position={{ lat: -19.3949988, lng: -54.5728501 }} />
        </Map>
      </Maps> */}
      <Contact />
      <Footer>
        <span>
          <div>
            <strong>Two Brothers &copy;</strong>
            2020 - Todos os direitos reservados
          </div>
        </span>
      </Footer>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYV8FMHShBUmViNIIUeytw91GgiutPZOM',
})(Dashboard);
