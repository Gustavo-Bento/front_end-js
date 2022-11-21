import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'

export default function aula01(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 01" />
        <title>Aula 01 - Git com HTML e CSS</title>
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
                  <h4 style={{textAlign: 'center'}}>Aula 01 - Git com HTML e CSS</h4>
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
              <div className="card m-3">
                <div className="card-body">
                  <div className={styleEstilo.cinzaEscuro}>
                    <h3 className="text-white p-2 text-center m-3">HTML 5</h3>
                  </div>
                  <ul>
                    <li>HTML significa Hyper Text Markup Language</li>
                    <li>HTML é a linguagem de marcação padrão para criar páginas da Web</li>
                    <li>HTML descreve a estrutura de uma página da Web</li>
                    <li>HTML consiste em uma série de elementos</li>
                    <li>Elementos HTML informam ao navegador como exibir o conteúdo</li>
                    <li>Elementos HTML rotulam partes do conteúdo como "este é um título", "este é um parágrafo", "este é um
                      link", etc.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card m-3">
                <div className="card-body">
                  <div className={styleEstilo.cinzaEscuro}>
                    <h3 className="text-white p-2 text-center m-3">CSS 3</h3>
                  </div>
                  <ul>
                    <li>CSS significa Cascading Style Sheets</li>
                    <li>CSS descreve como os elementos HTML devem ser exibidos na tela, papel ou em outra mídia</li>
                    <li>CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web de uma só vez
                    </li>
                    <li>As folhas de estilo externas são armazenadas em arquivos CSS</li>
                  </ul>
                </div>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <div className={styleEstilo.cinzaEscuro}>
                    <h3 className="text-white p-2 text-center m-3">GIT</h3>
                  </div>
                  <ul>
                    <li>Git é um sistema de controle de versão.</li>
                    <li>O Git ajuda você a acompanhar as alterações de código.</li>
                    <li>Git é usado para colaborar no código.</li>
                  </ul>
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