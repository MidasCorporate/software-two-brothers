import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '~/assets/logo.png';

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
              <a href="#inicio">INÍCIO</a>
            </li>
            <li>
              <a href="#sobre">SOBRE</a>
            </li>
            <li>
              <a href="#servicos">SERVIÇOS</a>
            </li>
            <li>
              <a href="#contatos">CONTATOS</a>
            </li>
          </ul>
          <div className="menu-section on">
            <button className="menu" type="button" onClick={handleToggle}>
              <div className="icon-menu">
                <div className="one" />
                <div className="two" />
                <div className="three" />
              </div>
              <strong>MENU</strong>
            </button>
          </div>
        </nav>

        <aside>
          <a href="https://www.facebook.com/Two-Brothers-111881983785700/">
            <FaFacebookF size={16} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={18} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5567998408117">
            <FaWhatsapp size={18} />
          </a>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
