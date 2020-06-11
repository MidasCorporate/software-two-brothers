import React from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { FaWhatsapp } from 'react-icons/fa';

import api from '~/services/api';

import Input from '~/components/Input';
import Textarea from '~/components/Textarea';
import { Wrapper, Container } from './styles';

function Contact() {
  async function handleSubmit({ name, email, cel, tel, message }) {
    await api.post('contacts', {
      name,
      email,
      cel,
      tel,
      message,
    });

    toast.success('Messagem enviado com sucesso');
  }

  return (
    <Wrapper>
      <Container>
        <div className="row">
          <strong className="title" id="contatos">
            Você tem alguma dúvida?
          </strong>
          <strong>Sinta-se livre para nos contatar!</strong>
          <span>
            <FaWhatsapp size={18} />
            <a href="https://api.whatsapp.com/send?phone=5567998408117">
              (67) 9 9840-8117
            </a>
          </span>
        </div>
        <Form onSubmit={handleSubmit}>
          <div>
            <Input name="name" placeholder="Nome" />
          </div>
          <div>
            <Input name="email" type="email" placeholder="E-mail" />
          </div>
          <div className="contact">
            <Input name="cel" placeholder="Celular" />
            <Input name="tel" placeholder="Telefone" />
          </div>
          <div>
            <Textarea name="message" placeholder="Messagem" />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Contact;
