import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdPerson } from 'react-icons/md';

import logo from '~/assets/logo.png';

import { Container, Profile, Content } from './styles';

export default function HeaderAdm() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Two Brothers" />
          <Link to="/dashboardadm">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <MdPerson />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
