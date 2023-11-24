import Toolbar from "../../components/Toolbar";
import styles from "./Formulario.module.scss";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from 'react';

export default function Animais() {
    const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});
    const [descartarSelecionado, setDescartarSelecionado] = useState(false);
    const [formValues, setFormValues] = useState({
      nome: 'Donisete',
      sobrenome: 'Oliveira',
      email: 'doniseteoliveira@gmail.com',
      cpf: '',
      city: '',
      endereço: '',
      bairro: '',
      numero: '',
      telefone: '(14) 98803-2407',
      estado: '',
    });

  const handleCheckboxChange = (id: string) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: !prevCheckboxes[id],
    }));
  };

  const handleButtonClick = () => {
    const selectedCheckboxes = Object.keys(checkboxes).filter((id) => checkboxes[id]);

    if (descartarSelecionado) {
      alert('Enviado com sucesso');
      setCheckboxes({});
      setDescartarSelecionado(false);

      // Limpar os campos do formulário
      setFormValues({
        ...formValues,
        cpf: '',
        city: '',
        endereço: '',
        bairro: '',
        numero: '',
        estado: '',
      });
    } else if (selectedCheckboxes.length > 0) {
      // Ação de enviar o formulário
      setFormValues({
        ...formValues,
        cpf: '',
        city: '',
        endereço: '',
        bairro: '',
        numero: '',
        estado: '',
      });

      setCheckboxes({});
    } else {
      // Alerta quando nenhuma opção é selecionada
      alert('Por favor, selecione pelo menos uma opção antes de enviar.');
    }
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
            value= {formValues.nome}  onChange={(e) => setFormValues({ ...formValues, nome: e.target.value })}
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
            value= {formValues.sobrenome}  onChange={(e) => setFormValues({ ...formValues, sobrenome: e.target.value })}
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
            value= {formValues.cpf}  onChange={(e) => setFormValues({ ...formValues, cpf: e.target.value })}
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
            value= {formValues.email}  onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
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
            value= {formValues.telefone}  onChange={(e) => setFormValues({ ...formValues, telefone: e.target.value })}
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
            value= {formValues.city}  onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
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
            value= {formValues.endereço}  onChange={(e) => setFormValues({ ...formValues, endereço: e.target.value })}
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
            value= {formValues.bairro}  onChange={(e) => setFormValues({ ...formValues, bairro: e.target.value })}
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
            value= {formValues.numero}  onChange={(e) => setFormValues({ ...formValues, numero: e.target.value })}
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
            value= {formValues.estado}  onChange={(e) => setFormValues({ ...formValues, estado: e.target.value })}
          ></input>
        </div>

        <div></div>
      </div>
      <div>
        <div className={styles.card}>
          <h2 className={styles.card_title}>O que você deseja?</h2>
          <div className={styles.button_container}>
            <button onClick={() => setDescartarSelecionado(true)} className={styles.action_button}>Descartar</button>
            <button  onClick={() => setDescartarSelecionado(false)} className={styles.action_button}>Doar</button>
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
                <input type="checkbox" checked={checkboxes['teclado']}
          onChange={() => handleCheckboxChange('teclado')}/> Teclado
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['mouse']}
          onChange={() => handleCheckboxChange('mouse')}/> Mouse
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['televisão']}
          onChange={() => handleCheckboxChange('televisão')}/> Televisão
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['monitor']}
          onChange={() => handleCheckboxChange('monitor')}/> Monitor
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['calculadora']}
          onChange={() => handleCheckboxChange('calculadora')}/> Calculadora
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['fone de ouvido']}
          onChange={() => handleCheckboxChange('fone de ouvido')}/> Fone de Ouvido
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['geladeira']}
          onChange={() => handleCheckboxChange('geladeira')}/> Geladeira
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['ventilador']}
          onChange={() => handleCheckboxChange('ventilador')}/> Ventilador
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['estabilizador']}
          onChange={() => handleCheckboxChange('estabilizador')}/> Estabilizador
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['cabo de rede']}
          onChange={() => handleCheckboxChange('cabo de rede')}/> Cabo de Rede
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['lâmpada']}
          onChange={() => handleCheckboxChange('lâmpada')}/> Lâmpada
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['carregador']}
          onChange={() => handleCheckboxChange('carregador')}/> Carregador
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['forno elétrico']}
          onChange={() => handleCheckboxChange('forno elétrico')}/> Forno Elétrico
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['impressora']}
          onChange={() => handleCheckboxChange('impressora')}/> Impressora
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['gps para carro']}
          onChange={() => handleCheckboxChange('gps para carro')}/> GPS para carro
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['câmera termográfica']}
          onChange={() => handleCheckboxChange('câmera termográfica')}/> Câmera termográfica
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['caixa de som']}
          onChange={() => handleCheckboxChange('caixa de som')}/> Caixa de som Bluetooth
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['console de videogame']}
          onChange={() => handleCheckboxChange('console de videogame')}/> Console de videogame
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['câmera de segurança']}
          onChange={() => handleCheckboxChange('câmera de segurança')}/> Câmera de segurança
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['scanner de documentos']}
          onChange={() => handleCheckboxChange('scanner de documentos')}/> Scanner de documentos
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['projetor']}
          onChange={() => handleCheckboxChange('projetor')}/> Projetor
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['kindle']}
          onChange={() => handleCheckboxChange('kindle')}/> Kindle
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['lâmpada led']}
          onChange={() => handleCheckboxChange('lâmpada led')}/> Lâmpada LED
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['monitor de bebê']}
          onChange={() => handleCheckboxChange('monitor de bebê')}/> Monitor de bebê
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['termômetro infravermelho']}
          onChange={() => handleCheckboxChange('termômetro infravermelho')}/> Termômetro infravermelho
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['mesa digitalizadora']}
          onChange={() => handleCheckboxChange('mesa digitalizadora')} /> Mesa digitalizadora
              </label>
            </div>
            <div className="column">
              <label>
                <input type="checkbox" checked={checkboxes['máquina de lavar roupa']}
          onChange={() => handleCheckboxChange('máquina de lavar roupa')}/> Máquina de lavar roupa
              </label>
              <label>
                <input type="checkbox" checked={checkboxes['outros']}
          onChange={() => handleCheckboxChange('outros')}/> Outros
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


