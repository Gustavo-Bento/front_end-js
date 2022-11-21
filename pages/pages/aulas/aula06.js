import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleTab from '../../../styles/tabelaClara.module.css'

export default function aula06(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 06" />
        <title>Aula 06 - Portas Lógicas em javaScript</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="../../../js/operadores-logicos.js"></script>
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item m-4">
                  <Link className="navbar-brand" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={[styleEstilo.arredondar]} />
                  </Link>
                </li>
                <li className="nav-item text-white m-4">
                  <h4 style={{textAlign:'center'}}>Aula 06 - Portas Lógicas em javaScript</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
        <div className="col-lg-3">
            <div className={styleLista.bgPurple}>
              <nav className={styleLista.nav}>
                <ul className="navbar-nav m-3">
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula01">
                        <div className={styleBotao.botaoLista}>
                          Aula 01 - Git com HTML e CSS
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula02">
                        <div className={styleBotao.botaoLista}>
                          Aula 02 - Seletores CSS 3
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula03">
                        <div className={styleBotao.botaoLista}>
                          Aula 03 - Introdução ao JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula04">
                        <div className={styleBotao.botaoLista}>
                          Aula 04 - Implementando BootStrap
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula05">
                        <div className={styleBotao.botaoLista}>
                          Aula 05 - Operadores em JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula06">
                        <div className={styleBotao.botaoLista}>
                          Aula 06 - Portas Lógicas em JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-9">
            <article className={styleLista.article}>
              <div className={styleEstilo.cinzaEscuro}>
                <h4 className="text-white p-2 text-center m-3">Portas Lógicas em JavaScript</h4>
              </div>
                <div className="card m-3">
                  <div className="card-body">
                    <div className="row p-2">
                      <div className="col-sm-8">
                        <div className={styleEstilo.cinzaClaro}>
                          <h4 className="p-2">Definição de Portas Lógicas</h4>
                        </div>
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
                              <div className={styleBotao.botaoLista}>
                                E - Porta And (&amp;&amp;)
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#2">
                            <div className={styleBotao.botaoLista}>
                                Ou - Porta Or (||)
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#3">
                            <div className={styleBotao.botaoLista}>
                                Não - Porta Not (!)
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#4">
                            <div className={styleBotao.botaoLista}>
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
                        <div className={styleEstilo.cinza}>
                          <h4 className="text-white p-2 text-center" id={1}>Porta Lógica And (E)</h4>
                        </div>
                        <p className="m-3" style={{textAlign: 'justify'}}>Essa porta retorna verdadeiro somente quando todas as entradas
                          forem verdadeiras. Segue exemplo das entradas A e B e sua respectiva saída R: </p>
                        <div className="container">
                          <table className={styleTab.tabelaClara}>
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
                          <a className={styleBotao.botao} id="conf-and" href="#1" onclick="and()">Resultado</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
          </div>
        </section>
    <footer className="text-center p-2 bg-dark text-white">
  <p>Desenvolvido por Gustavo Ferreira</p>
</footer>
</div>
);
}