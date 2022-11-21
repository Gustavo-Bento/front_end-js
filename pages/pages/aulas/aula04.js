import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'

export default function aula04(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 04" />
        <title>Aula 04 - Implementando BootStrap</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item m-1">
                  <Link className="navbar-brand" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={[styleEstilo.arredondar]} />
                  </Link>
                </li>
                <li className="nav-item text-white m-2">
                  <h4 style={{textAlign: 'center'}}>Aula 04 - Implementando BootStrap</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
        <div className="col-lg-3 p-3">
            <div className={styleLista.bgPurple}>
              <nav className={styleLista.nav}>
                <ul className="navbar-nav m-3">
                  <li className={styleLista.li}>
                    <div className="nav-item m-1">
                      <Link href="/pages/aulas//aula01">
                        <div className={styleBotao.botaoLista}>
                          Aula 01 - Git com HTML e CSS
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-1">
                      <Link href="/pages/aulas//aula02">
                        <div className={styleBotao.botaoLista}>
                          Aula 02 - Seletores CSS 3
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-1">
                      <Link href="/pages/aulas//aula03">
                        <div className={styleBotao.botaoLista}>
                          Aula 03 - Introdução ao JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-1">
                      <Link href="/pages/aulas//aula04">
                        <div className={styleBotao.botaoLista}>
                          Aula 04 - Implementando BootStrap
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-1">
                      <Link href="/pages/aulas//aula05">
                        <div className={styleBotao.botaoLista}>
                          Aula 05 - Operadores em JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-1">
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
              <h3 className=" text-white p-2 text-center m-3">
                <div className={styleEstilo.cinzaEscuro}>
                  Definição de BootStrap
                </div>
              </h3>
              <div className="card m-3">
                <div className="card-body">
                  <p>
                    <i className="fa fa-youtube-play" style={{fontSize: '24px'}} />
                    Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e
                    aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e
                    páginas de dispositivos móveis da mesma forma
                  </p>
                </div>
              </div>
              <h3 className="text-white p-2 text-center m-3">
                <div className={styleEstilo.cinzaEscuro}>
                Versões do BootStrap
                </div>
              </h3>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="p-2 m-3">
                      <div className={styleEstilo.cinzaClaro}>
                        <i className="	fa fa-check-square" />
                        BootStrap 3
                      </div>
                    </h4>
                    <div className="card m-3">
                      <div className="card-body">
                        <ul>
                          <li>
                            A versão 3.0 oferece suporte ao design mobile-first
                          </li>
                          <li>
                            É Baseado Em Um Sistema De Grade De 4 Camadas (Xs, Sm, Md, Lg).
                          </li>
                          <li>
                            A Classe .Btn-xs É Suportada.
                          </li>
                          <li>
                            A classe .row não é necessária usando grade em formulários.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h4 className="p-2 m-3">
                      <div className={styleEstilo.cinzaClaro}>
                        <i className="	fa fa-check-square" />
                        BootStrap 4
                      </div>
                    </h4>
                    <div className="card m-3">
                      <div className="card-body">
                        <ul>
                          <li>
                            A versão 4.0 apresenta o suporte SASS e Flexbox
                          </li>
                          <li>
                            É baseado em um sistema de grade de 5 camadas (xs, sm, md, lg, xl).
                          </li>
                          <li>
                            Em que estão disponíveis apenas .btn-sm e .btn-lg.
                          </li>
                          <li>
                            A classe .row é necessária ao usar a grade no formulário.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h4 className="cinza-claro p-2 m-3">
                    <div className={styleEstilo.cinzaClaro}>
                        <i className="	fa fa-check-square" />
                        BootStrap 5
                      </div>
                    </h4>
                    <div className="card m-3">
                      <div className="card-body">
                        <ul>
                          <li>
                            Possui 6 camadas (xs, sm, md, lg, xl, xxl).
                          </li>
                          <li>
                            Cores extras adicionadas aos looks ,, Uma paleta de cores aprimorada.
                          </li>
                          <li>
                            O Bootstrap 5 não é compatível com o IE 10 e 11.
                          </li>
                          <li>
                            A aparência dos elementos do formulário não mudará em sistemas operacionais ou
                            navegadores diferentes.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-white p-2 text-center m-3">
                <div className={styleEstilo.cinzaEscuro}>
                  Implementando Bootstrap
                </div>
              </h3>
              <div className="card m-3">
                <div className="card-body d-flex">
                  <p>
                    Para o desenvolvimento de templates com BootStrap externo, é necessario a sua vinculação pelo
                    link CSS. Para aplica-lo de forma offline devemos baixar todo o seu conteúdo e colarmos em um
                    documento CSS, declarando seu endereço de referência. Tanto seu documento CSS como JS deve ser
                    aplicados da mesma forma.
                    A aplicação de CSS BootStrap dentro do template deverá estar declarado em forma de classe
                    corretamente para que seja incorporado dentro do documento CSS do componente.
                  </p>
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