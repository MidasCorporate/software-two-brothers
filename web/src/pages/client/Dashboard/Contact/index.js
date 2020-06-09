import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Wrapper, Container } from './styles';

function Contact() {
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <strong className="title">Você tem alguma dúvida?</strong>
          <strong>Sinta-se livre para nos contatar!</strong>
          <p>
            <FaWhatsapp size={18} />
            (67) 9 9840-8117
          </p>
        </div>
        <form>
          <div>
            <input placeholder="nome" />
          </div>
          <div>
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="contact">
            <input placeholder="celular" />
            <input placeholder="telefone" />
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
