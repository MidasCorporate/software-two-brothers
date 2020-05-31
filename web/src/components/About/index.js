import React from 'react';

import {
  About,
  Container,
  SectionTitle,
  Row,
  Coll,
  ImageAbout,
} from './styles';

function AboutClient() {
  return (
    <About>
      <Container>
        <SectionTitle>
          <h2>Sobre Nós</h2>
        </SectionTitle>
        <Row>
          <Coll>
            <ImageAbout src="img/about.png" />
          </Coll>
          <div className="description-intro-text">
            <div className="description-intro-text">
              <h4>Quem nós somos</h4>
              <p>
                A Granja Rio Verde é uma filial da COOASGO direcionada à
                atividade de reprodução de suínos. A Multiplicadora tem como
                principal objetivo a produção de suínos para suprir sua cota de
                abates junto ao sistema AURORA. Situada no município de Rio
                Verde de Mato Grosso no estado de Mato Grosso do Sul no
                Centro-Oeste brasileiro, conta com aproximadamente 40.556,58m² e
                agrupa 5.000 matrizes reprodutoras.
              </p>
            </div>
          </div>
          <div className="description-text">
            <div className="description-text">
              <h4>O que fazemos</h4>
              <p>
                Nosso complexo de reprodução genética, conta com um sistema de
                distribuição de ração automatizado e de climatização que
                garantem o conforto e a expressão máxima do potencial genético
                suíno, contribuindo assim para os conceitos difundidos da
                política de bem-estar animal. Sua rotina de trabalho garante o
                alto nível sanitário do rebanho de suínos por meio de recursos
                tais como, mas não somente, cortina vegetal, veículo exclusivo
                para transbordo e a constante higienização das vestimentas dos
                empregados e utensílios de trabalho, prevenindo a contaminação
                cruzada. A produção por meio de auto reposição é independente e
                dispensa a introdução de animais externos, o que reduz a
                probabilidade de infecção por agentes biológicos nocivos ao
                ambiente da granja. A responsabilidade socioambiental é
                garantida por meio da destinação racional de dejetos da produção
                e a utilização de efluentes da biodigestão como biofertilizante
                e do biogás como fonte energética. A utilização de cisternas que
                representam o sistema de captação de água de chuva, reduzem a
                necessidade de água potável na higienização das instalações.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </About>
  );
}

export default AboutClient;
