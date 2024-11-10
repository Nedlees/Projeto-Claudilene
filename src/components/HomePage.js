import React, { useState } from "react";

const HomePage = ({ onNavigate }) => {
  const introductionText = 'Bem-vindo usuário, nosso aplicativo foi desenvolvido com o objetivo de promover a inclusão e aumentar a segurança das pessoas com deficiência visual. Ele utiliza tecnologias avançadas de leitura de ambiente e GPS para ajudar na locomoção segura e eficiente, oferecendo informações detalhadas sobre o entorno em tempo real. Com isso, buscamos melhorar a qualidade de vida dos usuários, evitando acidentes e oferecendo uma navegação mais independente e precisa. O sistema identifica obstáculos, alerta sobre perigos e informa a localização exata da pessoa, garantindo mais autonomia no dia a dia.';

  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakIntroduction = () => {
    const message = new SpeechSynthesisUtterance(introductionText);
    message.rate = 1; // Ajusta a velocidade da fala
    message.pitch = 1; // Ajusta o tom da fala

    message.onstart = () => {
      setIsSpeaking(true); // Atualiza o estado quando a fala começa
    };

    message.onend = () => {
      setIsSpeaking(false); // Atualiza o estado quando a fala termina
    };

    window.speechSynthesis.speak(message);
  };

  const handleButtonClick = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Cancela a fala se já estiver falando
      setIsSpeaking(false); // Atualiza o estado para indicar que não está mais falando
    } else {
      speakIntroduction(); // Inicia a narração
    }
  };

  return (
    <div className="home-page">
      <h1>Bem-Vindo ao Aplicativo de Acessibilidade</h1>
      <p>{introductionText}</p>
      <button onClick={handleButtonClick}>
        {isSpeaking ? 'Parar Narração' : 'Iniciar Narração'}
      </button>
      <br />
      <button onClick={onNavigate}>Ir para a Navegação</button>
    </div>
  );
};

export default HomePage;
