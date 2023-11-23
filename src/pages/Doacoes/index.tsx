import styles from "./Doacoes.module.scss";
import Toolbar from "../../components/Toolbar";
import Footer from "../../components/Footer";
import user1 from "../../assets/usuários/user1.png";
import user2 from "../../assets/usuários/user2.png";
import user3 from "../../assets/usuários/user3.png";
import { getDoacoes } from "../../services/doacoes";



export default function Doacoes() {
 const data = getDoacoes();
 console.log(data)

    return (
      <body>
    <header>
      <Toolbar />
    </header>
    <div>

    <h1 className={styles.doacoes_title}>Área de Doações</h1>

    <div className={styles.card_container}>
<div className={styles.user_card}>
    <img className={styles.img_user} src={user1} alt="Leandro"></img>
    <div className={styles.user_info}>
      <h2 className={styles.user_info__name}>Leandro Silva Gomes</h2>
      <ul>
        <li>Teclado</li>
        <li>Mouse</li>
        <li>Celular</li>
      </ul>
    </div>
    <button className={styles.abrir_button}>Abrir</button>
  </div>

  <div className={styles.user_card}>
    <img className={styles.img_user} src={user2} alt="Ana"></img>
    <div className={styles.user_info}>
      <h2 className={styles.user_info__name}>Ana Mirellis Antônio</h2>
      <ul>
        <li>Monitor</li>
        <li>Estabilizador</li>
        <li>Notebook</li>
      </ul>
    </div>
    <button className={styles.abrir_button}>Abrir</button>
  </div>

  <div className={styles.user_card}>
    <img className={styles.img_user} src={user3} alt="Donisete"></img>
    <div className={styles.user_info}>
      <h2 className={styles.user_info__name}>Donisete Oliveira</h2>
      <ul>
        <li>Televisão</li>
        <li>Geladeira</li>
        <li>Cabo de Rede</li>
      </ul>
    </div>
    <button className={styles.abrir_button}>Abrir</button>
  </div>
</div>
    </div>

  <div>
    <Footer />
  </div>
    </body>
  );
}
