import React, { useState } from "react";
import Toolbar from "../../components/Toolbar";
import styles from "./Resetsenha.module.scss"; // Crie um arquivo de estilo para ResetSenha
import { Link } from "react-router-dom";
import logo from "../../assets/components_img/logo2.png";

export default function ResetSenha() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResetSenha = () => {
    // Aqui você pode implementar a lógica para redefinir a senha
    console.log("Dados para redefinição de senha:", formData);

    // Redirecionar o usuário para a página de login após a redefinição de senha
    // window.location.href = "/login";
  };

  return (
    <body>
      <Toolbar />
      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.start}>
            <div className={styles.h1}>Redefinir Senha</div>

            <div className={styles.form}>
              <form>
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
                    <label
                      htmlFor="newPassword"
                      className={styles.inputBox__label}
                    >
                      {" "}
                      Nova Senha{" "}
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      name="newPassword"
                      placeholder="Digite a nova senha"
                      required
                      className={styles.inputBox__input}
                      value={formData.newPassword}
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className={styles.inputBox}>
                    <label
                      htmlFor="confirmPassword"
                      className={styles.inputBox__label}
                    >
                      {" "}
                      Confirmar Senha{" "}
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirme a nova senha"
                      required
                      className={styles.inputBox__input}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className={styles.continueButton} onClick={handleResetSenha}>
                  <button className={styles.continueButton__btn}>Redefinir Senha</button>
                </div>
              </form>
            </div>

            <Link to={("/login")}>
<h1 className={styles.esqueceuSenha}>Voltar</h1>


</Link>

          </div>



          <div className={styles.end}>
            <img src={logo} alt="Logo do Descartech" />
          </div>
        </div>
      </div>
    </body>
  );
}
