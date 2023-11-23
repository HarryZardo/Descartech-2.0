import React, { useState } from "react";
import styles from "./Cadastro.module.scss";
import ImageInput from "./ImageInput/imageinput";
import Toolbar from "../../components/Toolbar";
import logo2 from "../../assets/components_img/logo2.png";
import { Link } from "react-router-dom";

export default function Cadastro() {

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // Aqui você pode implementar a lógica para enviar os dados do usuário para o backend
    console.log("Dados do usuário cadastrado:", formData);
  };

  return (
    <body>
      <Toolbar />

      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.formImage}>
            <img src={logo2} alt="logo descartech"></img>
          </div>

          <div className={styles.form}>
            <form action="#">
              <div className={styles.formHeader}>
                <div className={styles.title}>
                  <h1 className={styles.h1}>BEM-VINDO!</h1>
                </div>

                <div className={styles.loginButton}>
                  <Link to={"/login"}>
                    <button className={styles.loginButton__button}>
                      <p className={styles.loginButton__text}>ENTRAR</p>
                    </button>
                  </Link>
                </div>
              </div>

              <div className={styles.avatarSpace}>
                <div className={styles.avatarBox}>
                  <ImageInput />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputBox}>
                  <label htmlFor="nome" className={styles.inputBox__label}>
                    {" "}
                    Nome{" "}
                  </label>
                  <input
                         id="nome"
                         type="text"
                         name="nome"
                         placeholder="Digite seu nome"
                         required
                         className={styles.inputBox__input}
                         value={formData.nome}
                         onChange={handleChange}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="sobrenome" className={styles.inputBox__label}>
                    {" "}
                    Sobrenome{" "}
                  </label>
                  <input
                    id="sobrenome"
                    type="text"
                    name="sobrenome"
                    placeholder="Digite seu Sobrenome"
                    required
                    className={styles.inputBox__input}
                    value={formData.sobrenome}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="email" className={styles.inputBox__label}>
                    {""}
                    Email{""}
                  </label>
                  <input
               id="email"
               type="text"
               name="email"
               placeholder="Digite seu E-mail"
               required
               className={styles.inputBox__input}
               value={formData.email}
               onChange={handleChange}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="number" className={styles.inputBox__label}>
                    {" "}
                    Telefone{" "}
                  </label>
                  <input
                          id="number"
                          type="text"
                          name="number"
                          placeholder="Digite seu número"
                          required
                          className={styles.inputBox__input}
                          value={formData.number}
                          onChange={handleChange}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="password" className={styles.inputBox__label}>
                    {" "}
                    Senha{" "}
                  </label>
                  <input
                         id="password"
                         type="text"
                         name="password"
                         placeholder="Digite sua senha"
                         required
                         className={styles.inputBox__input}
                         value={formData.password}
                         onChange={handleChange}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label
                    htmlFor="Confirmpassword"
                    className={styles.inputBox__label}
                  >
                    {" "}
                    Confirme sua senha{""}
                  </label>
                  <input
                     id="confirmpassword"
                     type="text"
                     name="confirmpassword"
                     placeholder="Confirme sua senha"
                     required
                     className={styles.inputBox__input}
                     value={formData.confirmPassword}
                     onChange={handleChange}
                  ></input>
                </div>
              </div>
              <Link to={"/home"}>
                <div className={styles.continueButton}>
                  <button
                    className={styles.continueButton__btn}
                    onClick={handleRegister}
                  >
                    CONTINUE
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
