import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { Intro, IntroBody, Container, Row, Coll } from './styles';
import logo from '~/assets/logo.png';
import Service from './Services';
import AboutClient from '~/pages/client/Dashboard/About';

function Dashboard({ google }) {
  const mapStyles = {
    width: '100%',
    height: '70%',
  };

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
                <p> Especialistas em saude automobilistica</p>
                <a href="#about">Saber Mais</a>{' '}
              </Coll>
            </Row>
          </Container>
        </IntroBody>
      </Intro>
      <AboutClient />
      <Service />
      <Map
        google={google}
        zoom={18}
        style={mapStyles}
        initialCenter={{ lat: -19.3949988, lng: -54.5728501 }}
      >
        <Marker position={{ lat: -19.3949988, lng: -54.5728501 }} />
      </Map>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYV8FMHShBUmViNIIUeytw91GgiutPZOM',
})(Dashboard);
