import React, { useState } from "react";
import Toolbar from "../../components/Toolbar";
import styles from "./Login.module.scss";
import Logo from "../../assets/components_img/logo2.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Dados do usuário para login:", formData);
  };

  return (
    <body>
      <Toolbar />
      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.start}>
            <div className={styles.h1}>ENTRAR!</div>

            <div className={styles.form}>
              <form>
                <div className={styles.inputGroup}>
                  <div className={styles.inputBox}>
                    <label htmlFor="nome" className={styles.inputBox__label}>
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Digite seu email"
                      required
                      className={styles.inputBox__input}
                      value={formData.email}
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className={styles.inputBox}>
                    <label
                      htmlFor="password"
                      className={styles.inputBox__label}
                    >
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
                      value={formData.password}
                      onChange={handleChange}
                    ></input>
                  </div>

<Link to={"/senha"}>
<h1 className={styles.esqueceuSenha}>Esqueceu a senha?</h1>
</Link>

                </div>

                <Link to={"/cadastro"}>
                  <div className={styles.cadastroButton}>
                    <button className={styles.cadastroButton__btn}>
                      CADASTRAR-SE
                    </button>
                  </div>
                </Link>

                <Link to={"/home"}>
                <div className={styles.continueButton} onClick={handleLogin}>
                  <button className={styles.continueButton__btn}>ENTRAR</button>
                </div>
                </Link>

              </form>
            </div>
          </div>

          <div className={styles.end}>
            <img src={Logo} alt="Logo do Descartech" />
          </div>
        </div>
      </div>
    </body>
  );
}
