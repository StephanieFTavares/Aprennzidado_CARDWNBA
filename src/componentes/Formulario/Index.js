import CampoTexto from "../CampoTexto/Index";
import ListaSuspensa from "../ListaSuspensa/Index";
import "./Formulario.css";

const Formulario = () => {

    const times = [
      'Mystics',
      'Indiana',
      'Chicago Sky',
      'New York',
      'Los Angels'
    ]

    return (
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o Card do seu time WNBA</h2>
      <CampoTexto label="Nome" placeholder="Digite seu Nome" />
      <CampoTexto label="Cargo " placeholder="Informe seu Cargo" />
      <CampoTexto label="Imagem" placeholder="Insira o Endereço da Imagem" />
      <ListaSuspensa itens={times} />
     </form>
    </section>
  );
};

export default Formulario;
