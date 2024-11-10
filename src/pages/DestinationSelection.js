import React, { useState } from "react";

const DestinationSelection = () => {
  const [inputMode, setInputMode] = useState('keyboard');
  const [ destination, setDestination] = useState('');

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.start();

    recognition.onresult = (event) => {
      setDestination(event.results[0][0].transcript);
    };

    recognition.onerror = (error) => {
      console.error('Erro no reconhecimento de voz:', error);
    };
  };

  return (
    <div className="destination-selection">
      <h2>Selecione seu destino</h2>
      <div className="input-mode-buttons">
        <button onClick={() => setInputMode('keyboard')} className={inputMode === 'keyboard' ? 'active' : ''}>Teclado</button>
        <button onClick={() => setInputMode('voice')} className={inputMode === 'voice' ? 'active' : ''}>Voz</button>
      </div>

      {inputMode === 'keyboard' ? (
        <input type="text" placeholder="Digite seu destino"
        value={destination} onChange={(e) => setDestination(e.targe.value)} />
      ) : (
        <button onClick={handleVoiceInput}>Falar Destino</button>
      )};

      <p>Destino selecionado : {destination}</p>
    </div>
  );
};

export default DestinationSelection;