import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toolbar from "../../components/Toolbar";
import styles from "./Login.module.scss";
import Logo from "../../assets/components_img/logo2.png";

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

  const fakeLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Simulação de autenticação
    if (formData.email === "doniseteoliveira@gmail.com" && formData.password === "senha123") {
      // Aqui você pode redirecionar o usuário para a página desejada após o login bem-sucedido
      console.log("Login bem-sucedido!");
        window.location.href = "/home";
    } else {
      console.log("Login falhou. Verifique seu email e senha.");
    }
  };

  return (
    <body>
      <Toolbar />
      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.start}>
            <div className={styles.h1}>ENTRAR!</div>

            <div className={styles.form}>
              <form onSubmit={fakeLogin}>
                <div className={styles.inputGroup}>
                  <div className={styles.inputBox}>
                    <label htmlFor="email" className={styles.inputBox__label}>
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
                      value={formData.password}
                      onChange={handleChange}
                    ></input>
                  </div>
<Link to={("/resetsenha")}>
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

                <div className={styles.continueButton}>
                  <button type="submit" className={styles.continueButton__btn}>
                    ENTRAR
                  </button>
                </div>
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
