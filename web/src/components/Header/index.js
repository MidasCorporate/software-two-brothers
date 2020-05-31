import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GiSpeedometer } from 'react-icons/gi';

import logo from '~/assets/twobrothers3.svg';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <div>
            <GiSpeedometer color="#333" size={38} />
            <img src={logo} alt="twobrothers" />
          </div>
        </nav>

        <aside>
          <Link to="https://www.facebook.com/Two-Brothers-111881983785700/">
            <FaFacebookSquare size={26} color="#333" />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram size={26} color="#333" />
          </Link>
          <Link to="(67) 99840-8117">
            <FaWhatsapp size={26} color="#333" />
          </Link>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
