import React, { useState } from "react";
import styles from "./Cadastro.module.scss";
import ImageInput from "./ImageInput/imageinput";
import Toolbar from "../../components/Toolbar";
import logo2 from "../../assets/components_img/logo2.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        // Handle successful registration
        console.log("User registered successfully!");
        window.location.href = "/home";
      } else {
        // Handle registration failure
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
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
            <form onSubmit={handleFormSubmit} action="#">
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
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="email" className={styles.inputBox__label}>
                    {""}
                    Email{""}
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
                    Telefone{" "}
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
                  <label htmlFor="password" className={styles.inputBox__label}>
                    {" "}
                    Senha{" "}
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label
                    htmlFor="Confirmpassword"
                    className={styles.inputBox__label}
                  >
                    {" "}
                    Confirme sua senha{" "}
                  </label>
                  <input
                    id="Confirmpassword"
                    type="password"
                    name="password"
                    placeholder="Confirme sua senha"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>
              </div>
              <div className={styles.continueButton}>
  <button type="submit" className={styles.continueButton__btn}>
    CONTINUE
  </button>
</div>
            
         
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
