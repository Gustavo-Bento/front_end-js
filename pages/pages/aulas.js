import Link from 'next/link'

export default function Aulas() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Playlist das aulas de programação web." />
        <title>Curso de Desenvolvimento Web</title>
        <link rel="stylesheet" href="/estilo.css" type="text/css" />
        <link rel="stylesheet" href="/tabela.css" type="text/css" />
        <link rel="stylesheet" href="/botao.css" type="text/css" />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <div className="container">
          <div className="cinza container" id="arredondar">
            <Link href="microcamp.com.br" className="cinza">
              <img src="/logo.jpg" alt="Logo Microcamp" className="cinza" id="arredondar" />
            </Link>
            <h1 className="cinza" >Bem vindo ao Curso de Programação! 💻</h1>
            <p className="cinza-escuro">Clique na aula que deseja:</p>
            <table className="tabela">
              <tbody><tr>
                  <th>Aula</th>
                  <th>Modulo</th>
                  <th>Conteúdo</th>
                </tr>
                <tr>
                  <td>
                    <Link className="botao" href="aulas/aula-01">01</Link>
                  </td>
                  <td>HTML</td>
                  <td>Git com HTML e CSS</td>
                </tr>
                <tr>
                  <td>
                    <Link className="botao" href="aulas/aula-02">02</Link>
                  </td>
                  <td>CSS3</td>
                  <td>Seletores CSS 3</td>
                </tr>
                <tr>
                  <td>
                    <Link className="botao" href="aulas/aula-03">03</Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Introdução ao JavaScript</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/aulas/aula-04" className="botao">04</Link>
                  </td>
                  <td>BootStrap</td>
                  <td>Implementando Bootstrap</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/aulas/aula-05" className="botao">05</Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Operadores em JavaScript</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/aulas/aula-06" className="botao">06</Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Portas Lógicas em JavaScript</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    );
  }
  