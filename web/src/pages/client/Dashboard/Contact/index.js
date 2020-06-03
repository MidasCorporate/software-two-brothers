import React from 'react';

import { Wrapper, Container } from './styles';

function Contact() {
  return (
    <Wrapper>
      <Container>
        <div>
          <div>
            <h2>Do you have any questions?</h2>
            <h2>Feel free to contact us!</h2>
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
        </div>
      </Container>
    </Wrapper>
  );
}

export default Contact;
