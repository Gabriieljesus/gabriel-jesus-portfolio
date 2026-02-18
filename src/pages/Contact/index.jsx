import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Hearder";
import { toast } from "react-toastify";

import {
  ContactContainer,
  Content,
  LeftSide,
  RightSide,
  InfoItem,
  Form,
  Input,
  TextArea,
  SubmitButton
} from "./styles";
import Footer from "../../components/Footer";

function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_we8tq97",     
        "template_ty5j5yt",    
        e.target,
        "mlvA4rAoR8AF81RMe"      
      )
      .then(
        () => {
          toast("Mensagem enviada com sucesso!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          toast("Erro ao enviar mensagem.");
          console.log(error);
          setLoading(false);
        }
      );
  };

  return (
    <ContactContainer>
      <Header />

      <Content>
        <LeftSide>
          <h1>Contato</h1>
          <p>
            Tem alguma proposta, projeto ou quer trocar uma ideia?
            Me envie uma mensagem!
          </p>

          <InfoItem>
            <strong>Email:</strong>
            <span>developer.gabrieljesus@gmail.com</span>
          </InfoItem>

          <InfoItem>
            <strong>Localização:</strong>
            <span>São Paulo, SP</span>
          </InfoItem>
        </LeftSide>

        <RightSide>
          <Form onSubmit={sendEmail}>
            <Input
              name="name"
              type="text"
              placeholder="Seu nome"
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Seu email"
              required
            />

            <TextArea
              name="message"
              rows="5"
              placeholder="Sua mensagem"
              required
            />

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </SubmitButton>
          </Form>
        </RightSide>
      </Content>
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
