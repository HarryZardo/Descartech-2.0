import styles from "./Doacoes.module.scss";
import Toolbar from "../../components/Toolbar";
import Footer from "../../components/Footer";
import Mel from "../../assets/desenvolvedores/mel.webp"


export default function Doacoes() {
    return (
        <div>
            <Toolbar />
            <body>
                <div>
                    <div className={styles.container}>
                        <div className={styles.informacion}>
                            <img className={styles.doador} src={Mel} alt="doador eletrônico"></img>
                            <h3>Melany Chechi Silverio</h3>
                        <div>
                    <div>
                      <p> Mouse</p>
                      <p> Teclado</p>
                      <p> Fone de Ouvido</p>
                    </div>
                    <br></br>
                    <button className={styles.Button}>Abrir</button>
                    </div>
                    </div>
                    </div>
                </div>

            <div>
                <div className={styles.container}>
                    <div className={styles.informacion}>
                        <img className={styles.doador} src={Mel} alt="doador eletrônico"></img>
                        <h3>Melany Chechi Silverio</h3>
                    <div>
                      <p> Mouse</p>
                      <p> Teclado</p>
                      <p> Fone de Ouvido</p>
                      <br></br>
                      <button className={styles.Button}>Abrir</button>
                    </div>
                </div>
             </div>
            </div>
           
        </body>
            <Footer />
        </div>
    );
}