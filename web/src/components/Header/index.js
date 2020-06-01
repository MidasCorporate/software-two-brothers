import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '~/assets/logo.png';

// import logo from '~/assets/twobrothers3.svg';

import { Container, Content } from './styles';

function Header() {
  const [headerColor, setHeaderColor] = useState(false);
  const [open, setOpen] = useState(false);

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

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <Container headerColor={headerColor}>
      <Content>
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt="twobrothers" />
          </Link>
          <ul open={open}>
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
          <button className="menu" type="button" onClick={handleToggle}>
            <div className="iconMenu">
              <span>
                <span />
              </span>
            </div>
            <strong>MENU</strong>
          </button>
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
