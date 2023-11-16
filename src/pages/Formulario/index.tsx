import Toolbar from "../../components/Toolbar";
import styles from "./Formulario.module.scss";
import Footer from "../../components/Footer";
import React, { useState } from 'react';

export default function Animais() {
    // Estado local para controlar os checkboxes selecionados
    const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});
    const [descartarSelecionado, setDescartarSelecionado] = useState(false);

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


      if (descartarSelecionado) {
        alert('Enviado com sucesso');
        setCheckboxes({});
        setDescartarSelecionado(false);
      } else {
        alert('Por favor, selecione uma das opções antes de enviar.');
      }

      // Desmarque os checkboxes selecionados
      setCheckboxes({});
    };

  return (
    <div className={styles.back}>
      <Toolbar />

      <div className={styles.dispBox}>
        <h1 className={styles.dispBox__text}> Formulário para o Descarte: </h1>
      </div>
      <br></br>
      <br></br>

      <div className={styles.inputGroup}>
        <div className={styles.inputBox}>
          <label htmlFor="nome" className={styles.inputBox__label}>
            {" "}
            Nome:{" "}
          </label>
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="sobrenome" className={styles.inputBox__label}>
            {" "}
            Sobrenome:{" "}
          </label>
          <input
            id="sobrenome"
            type="text"
            name="sobrenome"
            placeholder="Digite seu sobrenome"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="cpf" className={styles.inputBox__label}>
            {" "}
            CPF:{" "}
          </label>
          <input
            id="cpf"
            type="text"
            name="cpf"
            placeholder="Digite seu cpf"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="email" className={styles.inputBox__label}>
            {""}
            Email:{""}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="number" className={styles.inputBox__label}>
            {" "}
            Telefone:{" "}
          </label>
          <input
            id="number"
            type="text"
            name="number"
            placeholder="(xx) xxxxx-xxxx"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="city" className={styles.inputBox__label}>
            {" "}
            Cidade:{" "}
          </label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Digite sua Cidade"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="endereço" className={styles.inputBox__label}>
            {" "}
            Endereço:{" "}
          </label>
          <input
            id="endereço"
            type="text"
            name="endereço"
            placeholder="Digite sua Endereço"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="bairro" className={styles.inputBox__label}>
            {" "}
            Bairro:{" "}
          </label>
          <input
            id="bairro"
            type="text"
            name="bairro"
            placeholder="Digite sua Bairro"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="number" className={styles.inputBox__label}>
            {" "}
            Nº:{" "}
          </label>
          <input
            id="number"
            type="int"
            name="number"
            placeholder="Digite seu Número"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="Estado" className={styles.inputBox__label}>
            {" "}
            Estado:{" "}
          </label>
          <input
            id="estado"
            type="text"
            name="estado"
            placeholder="Digite seu Estado"
            required
            className={styles.inputBox__input}
          ></input>
        </div>

        <div></div>
      </div>
      <div>
        <div className={styles.card}>
          <h2 className={styles.card_title}>O que você deseja?</h2>
          <div className={styles.button_container}>
            <button onClick={() => setDescartarSelecionado(true)} className={styles.action_button}>Descartar</button>
            <button className={styles.action_button}>Doar</button>
          </div>
          <div className={styles.checkbox}>
            <div className="column">
              <label>
                <input type="checkbox"  checked={checkboxes['celular']}
          onChange={() => handleCheckboxChange('celular')}
        /> Celular

              </label>
              <label>
                <input type="checkbox" checked={checkboxes['tablet']}
          onChange={() => handleCheckboxChange('tablet')}/> Tablet
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Teclado
              </label>
              <label>
                <input type="checkbox" /> Mouse
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Televisão
              </label>
              <label>
                <input type="checkbox" /> Monitor
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Calculadora
              </label>
              <label>
                <input type="checkbox" /> Fone de Ouvido
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Geladeira
              </label>
              <label>
                <input type="checkbox" /> Ventilador
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Estabilizador
              </label>
              <label>
                <input type="checkbox" /> Cabo de Rede
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Lâmpada
              </label>
              <label>
                <input type="checkbox" /> Carregador
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Forno Elétrico
              </label>
              <label>
                <input type="checkbox" /> Impressora
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> GPS para carro
              </label>
              <label>
                <input type="checkbox" /> Câmera termográfica
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Caixa de som Bluetooth
              </label>
              <label>
                <input type="checkbox" /> Console de videogame
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Câmera de segurança
              </label>
              <label>
                <input type="checkbox" /> Scanner de documentos
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Projetor
              </label>
              <label>
                <input type="checkbox" /> Kindle
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Lâmpada LED
              </label>
              <label>
                <input type="checkbox" /> Monitor de bebê
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Termômetro infravermelho
              </label>
              <label>
                <input type="checkbox" /> Mesa digitalizadora
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" /> Máquina de lavar roupa
              </label>
              <label>
                <input type="checkbox" /> Outros
              </label>
            </div>
          </div>

          <div className={styles.centered_button_container}>
            <button onClick={handleButtonClick} className={styles.centered_button}>Enviar</button>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  }


