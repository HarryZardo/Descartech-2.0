import React, { useState } from "react";
import Toolbar from "../../components/Toolbar";
import styles from "./ResetSenha.module.scss"; // Crie um arquivo de estilo para ResetSenha
import Logo from "../../assets/components_img/logo2.png";

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
    console.log("Dados para redefinição de senha:", formData);
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
          </div>
          <div className={styles.end}>
            <img src={Logo} alt="Logo do Descartech" />
          </div>
        </div>
      </div>
    </body>
  );
}
