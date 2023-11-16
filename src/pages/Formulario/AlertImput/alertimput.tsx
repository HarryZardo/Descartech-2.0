// Importe as bibliotecas necessárias
import React, { useState } from 'react';

// Defina o seu componente
const MeuComponente: React.FC = () => {
  // Estado local para controlar os checkboxes selecionados
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});

  // Função para lidar com a seleção/deseleção de um checkbox
  const handleCheckboxChange = (id: string) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: !prevCheckboxes[id],
    }));
  };

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    // Verifique os checkboxes selecionados
    const selectedCheckboxes = Object.keys(checkboxes).filter((id) => checkboxes[id]);


    // Exiba o alerta com a mensagem "Enviado com sucesso"
    alert('Enviado com sucesso');

    // Desmarque os checkboxes selecionados
    setCheckboxes({});
  };

  return (
    <div>
      {/* Seus checkboxes */}
      <label>
        <input
          type="checkbox"
          checked={checkboxes['celular']}
          onChange={() => handleCheckboxChange('celular')}
        />{' '}
        Celular
      </label>

      <label>
        <input
          type="checkbox"
          checked={checkboxes['celular']}
          onChange={() => handleCheckboxChange('ventilador')}
        />{' '}
        Ventilador
      </label>

      {/* Adicione mais checkboxes conforme necessário */}

      {/* Botão para enviar */}
      <button onClick={handleButtonClick}>Enviar</button>
    </div>
  );
};

export default MeuComponente;
