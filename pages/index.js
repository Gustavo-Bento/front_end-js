export default function Home() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página inicial do curso de desenvolvimento web." />
        <title>Curso de Desenvolvimento Web</title>
        <link rel="stylesheet" href="css/estilo.css" type="text/css" /> 
        <link rel="stylesheet" href="css/botao.css" type="text/css" />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <div className="container">
          <div className="conteudo cinza" id="arredondar">
            <a href="microcamp.com.br" className="cinza">
              <img className="cinza" id="arredondar" src="/logo.jpg" type="jpg" alt="Logo Microcamp" />
            </a>
            <h1 className="cinza">Seja bem vindo!</h1>
            <p className="cinza-escuro" id="altera">Clique em começar para aprender! 👇</p>
            <a className="botao" href="pages/aulas.js">Começar</a>
          </div>
        </div>
      </div>
  );
}
