import React from 'react';

import polimento from '~/assets/polimento.png';
import lavagem from '~/assets/lavagem.png';
import seco from '~/assets/seco.png';
import { Container, Title, Content, Service } from './styles';

function Services() {
  return (
    <Container>
      <Title>
        <h2>Conheça alguns de nosso serviços</h2>
      </Title>
      <Content>
        <Service>
          <img src={polimento} alt="Polimento" />
          <h3>Polimento Cristalizado</h3>
          <p>
            Polimento Cristalizado (Remove riscos, manchas, protege a pintura e
            dá brilho. Nesse processo é utilizado massa de polir e a máquina de
            polir politriz);
          </p>
        </Service>
        <Service>
          <img src={lavagem} alt="Polimento" />
          <h3>Lavagem</h3>
          <p>
            Lavagem externa, inclusive por baixo do veículo, motor (com
            autorização) e limpeza interna.
          </p>
        </Service>
        <Service>
          <img src={seco} alt="Polimento" />
          <h3>Lavagem a Seco</h3>
          <p>
            Limpeza do interior de veículos e muito mais! Realizamos a lavagem
            com shampoo antibactericida que elimina a ação de fungos, ácaros e
            bactérias, através de uma poderosa fórmula de limpeza com base de
            produtos naturais.
          </p>
        </Service>
      </Content>
    </Container>
  );
}

export default Services;
