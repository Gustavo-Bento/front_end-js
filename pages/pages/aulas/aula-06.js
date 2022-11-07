export default function Aula06(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 06" />
        <title>Aula 06 - Portas Lógicas em javaScript</title>
        <link rel="stylesheet" href="/estilo.css" type="text/css" />
        <link rel="stylesheet" href="/botao.css" type="text/css" />
        <link rel="stylesheet" href="/lista.css" type="text/css" />
        <link rel="stylesheet" href="/bootstrap/style.css" type="text/css" />
        <link rel="stylesheet" href="/tabela-clara.css" type="text/css" />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item">
                  <a className="navbar-brand" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" id="arredondar" />
                  </a>
                </li>
                <li className="nav-item text-white">
                  <h4>Aula 06 - Portas Lógicas em javaScript</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
          <nav className="col-lg-3 bg-purple">
            <ul className="navbar-nav m-3">
              <li className="nav-item">
                <a href="aula-01.html">
                  <div className="botao-lista">
                    Aula 01 - Git com HTML e CSS
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-02.html">
                  <div className="botao-lista">
                    Aula 02 - Seletores CSS 3
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-03.html">
                  <div className="botao-lista">
                    Aula 03 - Introdução ao JavaScript
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-04.html">
                  <div className="botao-lista">
                    Aula 04 - Implementando BootStrap
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-05.html">
                  <div className="botao-lista">
                    Aula 05 - Operadores em JavaScript
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-06.html">
                  <div className="botao-lista">
                    Aula 06 - Portas Lógicas em JavaScript
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <article className="col-lg-9">
            <h4 className="cinza-escuro text-white p-2 text-center m-3">Portas Lógicas em JavaScript</h4>
            <div className="card m-3">
              <div className="card-body">
                <div className="row p-2">
                  <div className="col-sm-8">
                    <h4 className="cinza-claro p-2">Definição de Portas Lógicas</h4>
                    <p style={{textAlign: 'justify'}} className="p-3 m-3">Portas lógicas ou operadores lógicos são
                      formas resultantes
                      entre duas ou mais
                      comparadores
                      dentro de suas especificas expressões comparativas, onde o resultado deverá ser booleana
                      (verdadeiro ou
                      falso).
                      Iremos conhecer as principais portas e qual os seus respectivos resultados para as
                      especificas
                      expressões comparativas. Veja alguns exemplos definidos abaixos.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a href="#1">
                          <div className="botao-lista">
                            E - Porta And (&amp;&amp;)
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#2">
                          <div className="botao-lista">
                            Ou - Porta Or (||)
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#3">
                          <div className="botao-lista">
                            Não - Porta Not (!)
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#4">
                          <div className="botao-lista">
                            Exclusiva - Porta XOR (^)
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="card m-3">
                  <div className="card-body">
                    <h4 className="cinza text-white p-2 text-center" id={1}>Porta Lógica And (E)</h4>
                    <p className="m-3" style={{textAlign: 'justify'}}>Essa porta retorna verdadeiro somente quando todas as entradas
                      forem verdadeiras. Segue exemplo das entradas A e B e sua respectiva saída R: </p>
                    <div className="container">
                      <table id="tabela-clara">
                        <tbody><tr>
                            <th>
                              Entrada A
                            </th>
                            <th>
                              Entrada B
                            </th>
                            <th>
                              Saída  R
                            </th>
                          </tr>
                          <tr>
                            <td>V</td>
                            <td>V</td>
                            <td>V</td>
                          </tr>
                          <tr>
                            <td>V</td>
                            <td>F</td>
                            <td>F</td>
                          </tr>
                          <tr>
                            <td>F</td>
                            <td>V</td>
                            <td>F</td>
                          </tr>
                          <tr>
                            <td>F</td>
                            <td>F</td>
                            <td>F</td>
                          </tr>
                        </tbody></table>
                    </div>
                    <p className="m-3" style={{textAlign: 'justify'}}>
                      ((5 &gt;= 3) &amp;&amp; (3 != 2)) = <b id="res-and">Mostrando
                        o
                        resultado...</b>
                    </p>
                    <div className="text-center">
                      <a className="botao" id="conf-and" href="#1" onclick="and()">Resultado</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <footer className="text-center p-2 bg-dark text-white">
          <p>Desenvolvido por Gustavo Ferreira</p>
        </footer>
      </div>
    );
}