import React from 'react';

import polish from '~/assets/polish.png';
import detailing from '~/assets/detailing.png';
import lavagemeco from '~/assets/lavagemeco.png';
import seco from '~/assets/seco.png';
import insulfilm from '~/assets/insulfilm.png';
import tratamento from '~/assets/tratamento.png';
import vendas from '~/assets/vendas.png';
import envelopamento4 from '~/assets/envelopamento4.png';
import consignacao from '~/assets/consignacao.png';
import financiamento from '~/assets/financiamento.png';
import { Wrapper, Container, Title, Content, Service } from './styles';

function Services() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h2>Serviços oferecido</h2>
        </Title>
        <Content className="content">
          <Service className="service">
            <img src={polish} alt="Polimento" />
            <strong>Polimento Cristalizado</strong>
          </Service>
          <Service>
            <img src={lavagemeco} alt="Polimento" />
            <strong>Lavagem ecológica</strong>
          </Service>
          <Service>
            <img src={detailing} alt="Polimento" />
            <strong>Detalhamento</strong>
          </Service>
          {/* <Service>
            <img src={seco} alt="Polimento" />
            <strong>Lavagem a Seco</strong>
          </Service> */}
          <Service>
            <img src={insulfilm} alt="Polimento" />
            <strong>Insulfilme</strong>
          </Service>
          {/* <Service>
            <img src={envelopamento4} alt="Polimento" />
            <strong>Envelopamento</strong>
          </Service> */}
          <Service>
            <img src={tratamento} alt="Polimento" />
            <strong>Tratamento de couro</strong>
          </Service>
          <Service>
            <img src={vendas} alt="Polimento" />
            <strong>Venda de motos</strong>
          </Service>
          <Service>
            <img src={consignacao} alt="Polimento" />
            <strong>Consignação</strong>
          </Service>
          <Service>
            <img src={financiamento} alt="Polimento" />
            <strong>Financiamento</strong>
          </Service>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Services;
