import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import * as L from 'leaflet';
// import { GestureHandling } from 'leaflet-gesture-handling';
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
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import api from '~/services/api';

function Dashboard() {
  // L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

  const position = {
    lat: -19.3949988,
    lng: -54.5728501,
  };
  const [bannerCarrocel, setBannerCarrossel] = useState([]);
  const [teste, setTest] = useState('');

  const [number, setNumber] = useState();
  const [tag, setTag] = useState(false);
  const [styleBanner, setStyleBanner] = useState([]);

  useEffect(() => {
    async function loadBanner() {
      const response = await api.get('files/imgBanner');
      const { data } = response;

      const [arrayImg] = data.map((item) => item.file);
      // const urlUnic = arrayImg.map((item) => item.url);
      // console.log(arrayImg[0].url);
      setStyleBanner(data[0]);
      // console.log(data[0].opacity);
      setBannerCarrossel(arrayImg[0].url);
      setNumber(true);
    }
    loadBanner();
  }, []);

  useEffect(() => {
    if (bannerCarrocel.length === 1) {
      setTest(bannerCarrocel[0]);
      return;
    }
    setTimeout(() => {
      if (bannerCarrocel[number] !== undefined) {
        setNumber(number + 1);

        setTest(bannerCarrocel[number]);

        setTag(true);
      }
    }, 10000);
    if (bannerCarrocel[number] === undefined) {
      setNumber(0);
    }

    setTimeout(() => {
      setTag(false);
    }, 10000);
  }, [number]);

  return (
    <>
      <Header />
      <Intro id="inicio">
        <Banner opacity={styleBanner} tag={tag} urlImg={teste}>
          <div />
        </Banner>
        <IntroBody>
          <Container>
            <Row>
              <Coll display={styleBanner}>
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
                <a href="#sobre">Saber Mais</a>{' '}
              </Coll>
            </Row>
          </Container>
        </IntroBody>
      </Intro>
      <AboutClient />
      <Service />
      <Reviews />
      <Map scrollWheelZoom={false} center={position} zoom={18}>
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
