import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página inicial do curso de desenvolvimento web." />
        <title>Curso de Desenvolvimento Web</title>
        <style dangerouslySetInnerHTML={{__html: "\n        \t*{\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody{\n    background-color: black;\n    color:white;\n}\n\nh1{\n    font-size: x-large;\n}\n\np{\n    font-family: Helvetica;\n}\n\nimg{\n   width: 128px;\n   height: auto;\n}\n\narticle p{\n    text-align: left;\n    margin-left: 25;\n}\n\n.conteudo{\n    width: 480px;\n    padding: 2.5px 10px;\n    text-align: center;\n    padding: 15px;\n    margin-top: 10%;\n}\n\n.container{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.cinza{\n    background-color: #606060;\n}\n.cinza-escuro{\n    background-color: #404040;\n}\n.cinza-claro{\n    background-color: #ddd;\n    color:black;\n    text-align: left;\n    margin-left: 25;\n    margin-right: 25;\n    padding-left: 10;\n\n}\n#arredondar{\n    border-radius: 20px 20px 20px 20px;\n}\n        " }} />
        <style dangerouslySetInnerHTML={{__html: "\n        \t.botao{\n    margin: 0;\n    font-size: 14pt;\n}\n\n\n.botao, .botao-lista{\n    text-decoration: none;\n    padding: 5px 15px;\n    background-color: #08ba94;\n    color: #fff;\n    border-radius: 20px;\n}\n.botao-lista{\n    margin-left: 5;\n    font-size: 12pt;\n}\n\n.botao:hover{\n    background-color: #05998d;\n}\n\n.botao-lista:hover{ \n    background-color: #05998d;\n}\n        " }} />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <div className="container">
          <div className="conteudo, cinza" id="arredondar">
            <Link href="microcamp.com.br" className="cinza">
              <img className="cinza" id="arredondar" src="/logo.jpg" type="jpg" alt="Logo Microcamp" />
            </Link>
            <h1 className="cinza">Seja bem vindo!</h1>
            <p className="cinza-escuro" id="altera">Clique em começar para aprender! 👇</p>
            <Link className="botao" href="/pages/aulas.js">Começar</Link>
          </div>
        </div>
      </div>
  );
}
