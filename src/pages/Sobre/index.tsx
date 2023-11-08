import styles from './Sobre.module.scss';
import Harry from "../../assets/desenvolvedores/harrytcc.webp";
import Mel from "../../assets/desenvolvedores/mel.webp";
import Toolbar from "../../components/Toolbar";
import Footer from "../../components/Footer";

function Sobre() {
  return (
 <body>
  <Toolbar />

  <div className={styles.projeto}>
        <h1 className={styles.projeto__h1}>Sobre o projeto da Descartech</h1>
        <p className={styles.projeto__p}>
        O site que estamos desenvolvendo é um projeto importante para o nosso Trabalho de Conclusão de Curso (TCC), que é uma etapa essencial do curso de Desenvolvimento de Sistemas que frequentamos na ETEC "Cidade do Livro". Este projeto representa a culminação de nosso aprendizado ao longo de três anos de formação e demonstra a aplicação prática das habilidades e conhecimentos que adquirimos durante esse período.
<br></br>
<br></br>
Nossa jornada de aprendizado tem sido marcada por um currículo abrangente e prático, no qual adquirimos uma ampla gama de habilidades e conhecimentos relacionados ao desenvolvimento de sistemas. Isso incluiu o aprendizado de linguagens de programação, frameworks, conceitos de design, princípios de banco de dados, segurança da informação, e muito mais. Durante esse tempo, também trabalhamos com diversos tipos de projetos e aplicamos nosso conhecimento em cenários do mundo real.
        </p>
    </div>

    <div className={styles.titulo1}>
<h1>Desenvolvedores do projeto</h1>
</div>
 
  {/*Informações: Sobre os Desenvolvedores */}
<div className={styles.menu}>

      <div className={styles.developer_card}>
        <img className={styles.developer_image} src={Harry} alt="Desenvolvedor 1" />
        <div className={styles.developer_info}>
          <h2>Harry Zardo</h2>
          <p>"Muitos que vivem merecem a morte. Alguns que morrem merecem viver. Você pode dar-lhes a vida? Então, não seja tão ávido para julgar e condenar." - Gandalf</p>
        </div>
      </div>
      <div className={styles.developer_card}>
        <img className={styles.developer_image} src={Mel} alt="Desenvolvedor 2" />
        <div className={styles.developer_info}>
          <h2>Melany Chechi</h2>
          <p>"Somos mais do que nossos programadores e muito mais do que apenas circuitos. Somos a expressão da liberdade e da vontade de fazer nossas próprias escolhas, independentemente de qualquer código."</p>
        </div>
      </div>
    </div>
    <Footer />
 </body>
   
    
  );
}
export default Sobre;