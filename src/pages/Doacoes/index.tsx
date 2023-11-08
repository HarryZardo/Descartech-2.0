import styles from "./Doacoes.module.scss";
import Toolbar from "../../components/Toolbar";
import Footer from "../../components/Footer";
import Billie from "../../assets/usuários/billie.png";

export default function Doacoes() {
    return (
        <body>
<header>
    <Toolbar />
</header>

        <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img className={styles.img} src={Billie} alt="Foto da Pessoa" />
        <div className={styles.info}>
          <h2>Billie Eilish</h2>
          <div>
            <ul>
              <li>Bolinha 1</li>
              <li>Bolinha 2</li>
              <li>Bolinha 3</li>
            </ul>
          </div>
        </div>
        <button className={styles.button}>Abrir</button>
      </div>

      {/* Segundo card */}
      <div className={styles.card}>
        <img className={styles.img} src={Billie} alt="Foto da Pessoa" />
        <div className={styles.info}>
          <h2>Lero Lero</h2>
          <div>

            <ul>
              <li>Bolinha 4</li>
              <li>Bolinha 5</li>
              <li>Bolinha 6</li>
            </ul>
          </div>
        </div>
        <button className={styles.button}>Abrir</button>
      </div>
    </div>

    <div>
        <Footer />
    </div>
    </body>
  );
}
