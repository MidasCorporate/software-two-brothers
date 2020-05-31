import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GiSpeedometer } from 'react-icons/gi';

// import logo from '~/assets/twobrothers3.svg';

import { Container, Content } from './styles';

function Header() {
  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setHeaderColor(false);
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setHeaderColor(true);
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });

  return (
    <Container headerColor={headerColor}>
      <Content>
        <nav>
          <Link to="/" className="logo">
            <GiSpeedometer size={51} />
            <div>
              <strong className="two">TWO</strong>
              <strong className="brothers">BROTHERS</strong>
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/">INÍCIO</Link>
            </li>
            <li>
              <Link to="/">SOBRE</Link>
            </li>
            <li>
              <Link to="/">COMENTÁRIOS</Link>
            </li>
            <li>
              <Link to="/">CONTATOS</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Link to="https://www.facebook.com/Two-Brothers-111881983785700/">
            <FaFacebookF size={16} />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram size={18} />
          </Link>
          <Link to="(67) 99840-8117">
            <FaWhatsapp size={18} />
          </Link>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
