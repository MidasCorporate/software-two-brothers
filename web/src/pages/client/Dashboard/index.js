import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { Link } from 'react-router-dom';

import {
  Intro,
  IntroBody,
  Container,
  Row,
  Coll,
  Footer,
  Banner,
} from './styles';
import logo from '~/assets/logo.png';
import Service from './Services';
import AboutClient from '~/pages/client/Dashboard/About';
import Reviews from '~/pages/client/Dashboard/Reviews';
import Contact from '~/pages/client/Dashboard/Contact';
import Header from '~/components/Header';

import '~/styles/leaflet.css';

import api from '~/services/api';

function Dashboard() {
  const position = {
    lat: -19.3949988,
    lng: -54.5728501,
  };
  const [bannerCarrocel, setBannerCarrossel] = useState([]);
  const [teste, setTest] = useState('');

  const [number, setNumber] = useState();
  const [tag, setTag] = useState(false);

  useEffect(() => {
    async function loadBanner() {
      const response = await api.get('files/imgBanner');
      const { data } = response;

      const [arrayImg] = data.map((item) => item.file);
      const urlUnic = arrayImg.map((item) => item.url);

      setBannerCarrossel(urlUnic);
      setNumber(true);
    }
    loadBanner();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (bannerCarrocel[number] !== undefined) {
        setNumber(number + 1);

        setTest(bannerCarrocel[number]);

        setTag(true);
      }
    }, 5000);
    if (bannerCarrocel[number] === undefined) {
      setNumber(0);
    }

    setTimeout(() => {
      setTag(false);
    }, 5000);
  }, [number]);

  return (
    <>
      <Header />
      <Intro id="inicio">
        <Banner tag={tag} urlImg={teste}>
          <div />
        </Banner>
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
                {/* <button onClick={testet} type="button"> */}
                {/* Teste
                </button> */}
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
