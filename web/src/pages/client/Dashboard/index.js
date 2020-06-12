import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { Link } from 'react-router-dom';

import { Intro, IntroBody, Container, Row, Coll, Footer } from './styles';
import logo from '~/assets/logo.png';
import Service from './Services';
import AboutClient from '~/pages/client/Dashboard/About';
import Reviews from '~/pages/client/Dashboard/Reviews';
import Contact from '~/pages/client/Dashboard/Contact';
import Header from '~/components/Header';

import '~/styles/leaflet.css';

function Dashboard() {
  const position = {
    lat: -19.3949988,
    lng: -54.5728501,
  };
  return (
    <>
      <Header />
      <Intro id="inicio">
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
      <Map center={position} zoom={18}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Two Brothers</strong> <br /> o melhor tratamento para seu
            veiculo.
          </Popup>
        </Marker>
      </Map>
      <Contact />
      <Footer>
        <span>
          <div>
            <strong>Two Brothers &copy;</strong>
            2020 - Todos os direitos reservados -
            <strong>
              <Link to="/adm">Acessar</Link>
            </strong>
          </div>
        </span>
      </Footer>
    </>
  );
}

export default Dashboard;
