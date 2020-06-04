import React from 'react';

import { Wrapper, Container } from './styles';

function Contact() {
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <strong className="title">Você tem alguma dúvida?</strong>
          <strong>Sinta-se livre para nos contatar!</strong>
        </div>
        <form>
          <div>
            <input type="text" placeholder="nome" />
          </div>
          <div>
            <input type="email" placeholder="E-mail" />
          </div>
          <div>
            <textarea rows="5" placeholder="Messagem" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </Container>
    </Wrapper>
  );
}

export default Contact;
